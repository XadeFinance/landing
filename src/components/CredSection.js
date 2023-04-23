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
  
      let activeIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const rect = line.getBoundingClientRect();
        if (rect.top <= bottom && rect.bottom >= top) {
          activeIndex = i + 1;
        }
      }
      console.log(activeIndex)
      setActiveLine(activeIndex);
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
        <div className="line">This is the first line of text.</div>
        <div className="line">This is the second line of text.</div>
        <div className="line">This is the third line of text.</div>
        <div className="line">This is the fourth line of text.</div>
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
          return "https://dummyimage.com/600x400/000/fff&text=Image+1";
        case 2:
          return "https://dummyimage.com/600x400/111/fff&text=Image+2";
        case 3:
          return "https://dummyimage.com/600x400/222/fff&text=Image+3";
        case 4:
          return "https://dummyimage.com/600x400/333/fff&text=Image+4";
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
