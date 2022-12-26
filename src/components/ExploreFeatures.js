import React, { useRef, useEffect, useLayoutEffect, forwardRef } from "react";
import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// You can add to the cards array, and it will create a new card for you
const cards = [
  {
    header: "Payments",
    src: "https://www.xade.finance/Media/Illustration.svg",
    title: "Global payments",
    backgroundColor: "#44d664",
    description:
      "Send payments all around the globe in multiple stablecoins with close to zero fees through our advanced blockchain technology",
  },
  {
    header: "Savings",
    src: "https://www.xade.finance/Media/Illustration-2.svg",
    title: "Stable savings",
    backgroundColor: "#d1ff4e",
    description:
      "Earn up to 8.1% APY with our stable savings account which is designed to provide a yield more than your common regional inflation rate",
  },
  {
    header: "Investments",
    src: "https://www.xade.finance/Media/Illustration-3.svg",
    title: "Pro Trading",
    backgroundColor: "#4eeaff",
    description:
      "Trade more than 5000 markets including stocks, crypto, commodities with 10x leverage and short selling using perpetual futures",
  },
  {
    header: "Borrowing",
    src: "https://www.xade.finance/Media/Illustration-4.svg",
    title: "Secured Loans",
    backgroundColor: "#fFd84e",
    description:
      "Get secured loans against multiple real world tokenized assets without any credit score check and at competitive rates with our super app",
  },
];

const CardItem = forwardRef((props, ref) => {
  return (
    <>
      <div
        className="article-box article-box-desktop"
        style={{ backgroundColor: props.backgroundColor }}
        ref={ref}
      >
        <div className="left-flex-article">
          <img src={props.src} alt="" />
          <p>{props.title}</p>
        </div>
        <div className="right-flex-article">
          <p style={{ textAlign: "left" }}>
            <br />
            <br />
            {props.description}
            <br />
          </p>
        </div>
      </div>
    </>
  );
});

function ExploreFeatures() {
  const headerRef = useRef();
  const headerTextRef = useRef();
  const wrapperRef = useRef();

  let refs = useRef([]);

  // Connects the refs to the react ref "current" property to the components
  refs.currentIndex = Array.apply(null, Array(cards.length)).map(
    (index) => (refs.current[index] = React.createRef())
  );

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector("div.article-box");

      const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          start: "top +=100",
          end: () => wrapperRef.current.offsetWidth,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < cards.length; i++) {
        gsap.to(refs.currentIndex[i].current, {
          scrollTrigger: {
            trigger: refs.currentIndex[i].current,
            containerAnimation: horizontalTween,
            start: "center center",
            end:
              i === cards.length - 1 // Change the behavior if it's the last card
                ? `${wrapperRef.current.offsetWidth}`
                : "center center",
            endTrigger:
              i === cards.length - 1 // Change the behavior if it's the last card
                ? refs.currentIndex[i].current
                : refs.currentIndex[i + 1].current,
            snap: i === cards.length - 1 ? { delay: 8 } : "",
            onEnter: () => {
              refs.currentIndex[i].current.style.opacity = 1;
              headerTextRef.current.children[i].style.opacity = 1;
            },
            onEnterBack: () => {
              refs.currentIndex[i].current.style.opacity = 1;
              headerTextRef.current.children[i].style.opacity = 1;
            },
            onLeave: () => {
              refs.currentIndex[i].current.style.opacity = 0.25;
              headerTextRef.current.children[i].style.opacity = 0.3;
            },
            onLeaveBack: () => {
              refs.currentIndex[i].current.style.opacity = 0.25;
              headerTextRef.current.children[i].style.opacity = 0.3;
            },
          },
        });
      }
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef}>
        <div className="ultimate-wrapper-astendo" ref={headerRef}>
          <div className="header-articles">
            <p className="explore-articles">Explore features</p>

            {/* TODO: Update Headers by using the cards array  */}
            {/* I didn't have the time to do it, because I was facing issues with ref.  */}
            {/* If you do this, know about forwardRef, see what I did in the cardItem function */}
            <div className="headers-post-parent" ref={headerTextRef}>
              <p className="headers-post">Payments</p>
              <p className="headers-post">Savings</p>
              <p className="headers-post">Investments</p>
              <p className="headers-post">Borrowing</p>
            </div>
          </div>
        </div>
        <div className="wrap-overflow">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              backgroundColor={card.backgroundColor}
              ref={refs.currentIndex[index]}
              src={card.src}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreFeatures;
