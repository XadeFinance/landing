import './styles.css'
import React, { useRef, useEffect, useLayoutEffect, forwardRef, useState } from "react";
import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LeftSection = ({ setActiveLine }) => {
    const leftSectionRef = useRef(null);
  
    const handleScroll = () => {
        console.log('life')
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const bottom = top + window.innerHeight;
      const lines = leftSectionRef.current.querySelectorAll(".line");
  
      let activeIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const rect = line.getBoundingClientRect();
        if (rect.top <= bottom && rect.bottom >= top) {
          console.log('wot')
          activeIndex = i + 1;
        }
      }
      console.log(activeIndex - 1)
      setActiveLine(activeIndex - 1);
    };
    
    useEffect(() => {
      console.log(1);
      handleScroll(); // Set initial active line
      window.addEventListener("scroll", handleScroll, true);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [setActiveLine]);
  
    return (
      <div className="left-section" ref={leftSectionRef}>
        <div className="line">
          <div style = {{fontSize: '3rem', fontWeight: 500, lineHeight: 1.2}}>
            Global Payments to any identity in a gasless manner 
          </div>
          <br></br>
          <div style = {{fontSize: '1rem'}}>
          Send Payments to any email address, mobile number, DID and more in a gasless manner irrespective of the fact whether the recipient has a wallet or not with programmable payments.
          </div>
          </div>
        <div className="line">
        <div style = {{fontSize: '3rem', fontWeight: 500, lineHeight: 1.2}}>
        Beat Inflation with a stable savings account 

          </div>
          <br></br>
          <div style = {{fontSize: '1rem'}}>
          Get a savings account created specifically to beat inflation by financing real world loans powered by our innovative savings protocol SabeX.
</div>
        </div>
        <div className="line">
        <div style = {{fontSize: '3rem', fontWeight: 500, lineHeight: 1.2}}>
        Speculate on the price of anything like a pro
          </div>
          <br></br>
          <div style = {{fontSize: '1rem'}}>
          Go Long or Short with upto 10x leverage on stocks, crypto, forex and more powered by DeriveX with almost guranteed liquidity and improved risk engines.
          </div>
        </div>
        <div className="line">
        <div style = {{fontSize: '3rem', fontWeight: 500, lineHeight: 1.2}}>
        Finance your loans easily 
          </div>
          <br></br>
          <div style = {{fontSize: '1rem'}}>
          Finance your real world loans such as EMIs or Mortgages or against ERC-20 Tokens in various manners with no paperwork powered by SabeX.
          </div>
        </div>
      </div>
    );
  };
  



  const RightSection = ({ activeLine }) => {
    const rightSectionRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const [previousActiveLine, setPreviousActiveLine] = useState(1);
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const images = imageWrapperRef.current.children;
      const imageWidth = images[0].getBoundingClientRect().width;
    //   imageWrapperRef.current.scrollLeft += 1000;
    if(previousActiveLine < activeLine)
    {
    gsap.to(imageWrapperRef.current, {
        x: `-=${imageWidth}`,
        duration: 0.5,
      });
    }
    else if(previousActiveLine > activeLine)
    {
    gsap.to(imageWrapperRef.current, {
        x: `+=${imageWidth}`,
        duration: 0.5,
      });
    }
    //   ScrollTrigger.create({
    //     trigger: rightSectionRef.current,
    //     start: "top top",
    //     end: "+=300%",
    //     horizontal: true,
    //     scrub: true,
    //     snap: 1 / (images.length - 1),
    //     onUpdate: (scrollTrigger) => {
    //       const currentImage = Math.round(scrollTrigger.progress * (images.length - 1));
    //       gsap.to(imageWrapperRef.current, {
    //         x: -currentImage * imageWidth,
    //         duration: 0.5,
    //       });
    //     },
    //   });
      setPreviousActiveLine(activeLine)
    }, [activeLine]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const images = imageWrapperRef.current.children;
        const imageWidth = images[0].getBoundingClientRect().width;
      //   imageWrapperRef.current.scrollLeft += 1000;
      if(previousActiveLine < activeLine)
      {
      gsap.to(imageWrapperRef.current, {
          x: `-=${imageWidth}`,
          duration: 0.2,
        });
      }
      else if(previousActiveLine > activeLine)
      {
      gsap.to(imageWrapperRef.current, {
          x: `+=${imageWidth}`,
          duration: 0.2,
        });
      }
      //   ScrollTrigger.create({
      //     trigger: rightSectionRef.current,
      //     start: "top top",
      //     end: "+=300%",
      //     horizontal: true,
      //     scrub: true,
      //     snap: 1 / (images.lengxth - 1),
      //     onUpdate: (scrollTrigger) => {
      //       const currentImage = Math.round(scrollTrigger.progress * (images.length - 1));
      //       gsap.to(imageWrapperRef.current, {
      //         x: -currentImage * imageWidth,
      //         duration: 0.5,
      //       });
      //     },
      //   });
        setPreviousActiveLine(activeLine)
      }, [activeLine]);
  
    const getImage = (lineIndex) => {
      switch (lineIndex) {
        case 1:
          return "https://aravbudhiraja.me/images/remmitex.jpg";
        case 2:
          return "https://aravbudhiraja.me/images/sabex.jpg";
        case 3:
          return "https://aravbudhiraja.me/images/derivex.jpg";
        case 4:
          return "https://aravbudhiraja.me/images/sabex.jpg";
        default:
          return "";
      }
    };
  
    const imageUrl = getImage(activeLine);
  
    return (
      <div className="right-section" ref={rightSectionRef}>
        <div className="image-wrapper" ref={imageWrapperRef}>
          <div className="image-container">
            <img src={getImage(1)} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={getImage(2)} alt="Image 2" />
          </div>
          <div className="image-container">
            <img src={getImage(3)} alt="Image 3" />
          </div>
          <div className="image-container">
            <img src={getImage(4)} alt="Image 4" />
          </div>
        </div>
        {/* <div className="image-description">{`Image ${activeLine}`}</div> */}
      </div>
    );
  };
  
  

const App = () => {
  const [activeLine, setActiveLine] = useState(1);

  return (
    <div className="app">
      <LeftSection setActiveLine={setActiveLine} />
      <RightSection activeLine={activeLine} />
    </div>
  );
};

export default App;
