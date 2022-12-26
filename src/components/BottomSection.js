import React from "react";
import "../styles/style.css";

export default function BottomSection() {
  return (
    <>
      <div>
        <div className="bettermain">The Super Decentralised Bank</div>
        <br />
        <br />
        <div className="bettersub">
          <div className="text-centre">
            Xade is the hybrid solution between DeFi and traditional banks which
            provides all banking services powered by our in-house DeFi protocols
            with the user experience of a digital bank in the most transparent,
            efficient and secure manner.
          </div>
        </div>
        <div>
          <br />
          <br />
          <div className="more-features-center">
            <div className="more-features-top-elements">
              <div className="more-features-element">
                <img
                  src="https://www.xade.finance/Media/uxicon.svg"
                  className="dabbang"
                />
                <div className="betterhead">
                  <p>Familiar user experience</p>
                </div>
                <p style={{ color: "#7b7b7b" }} className="bettercontent">
                  We provide a simple, easy to understand user experience which
                  is indistinguishable from a digital banking experience through
                  our premium and modern interface.
                </p>
              </div>
              <div className="more-features-element">
                <img
                  src="https://www.xade.finance/Media/innovative.svg"
                  className="dabbang"
                />
                <div className="betterhead">
                  <p>Innovative and sustainable </p>
                </div>
                <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                  We are powered by our own in-house DeFi protocols which are
                  designed to replicate real world banking services in the most
                  efficient and sustainable manner possible.
                </p>
              </div>
            </div>
            <div className="more-features-bottom-elements">
              <div className="more-features-element">
                <img
                  src="https://www.xade.finance/Media/world icon.svg"
                  className="dabbang"
                />
                <div className="betterhead">
                  <p>Made for the real world use</p>
                </div>
                <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                  We have created our product to be a direct competitor to
                  traditional banks and aim to bring real world elements such as
                  inflation in countries and tangible assets on chain.
                </p>
              </div>
              <div className="more-features-element">
                <img
                  src="https://www.xade.finance/Media/transparenticon.svg"
                  className="dabbang"
                />
                <div className="betterhead">
                  <p>Transparent and Non-Custodial</p>
                </div>
                <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                  {" "}
                  We never take custody over your funds while being completely
                  transparent and decentralized by keeping all our
                  transactions,documents and codebase publicly accessible.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
