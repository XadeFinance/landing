import React from "react";
import "../styles/style.css";
import video from "../assets/Video.mp4";



export default function TopSection() {
  return (
    <>
      <div className="video-container">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
        <div className="caption">
          <div className="header1">A new era of banking</div>
          <br />
          <div className="subhead2">
            The super decentralised bank which provides all banking services on
            chain powered by our in-house DeFi protocols{" "}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="button69">
            <a
              href="https://testnet.app.xade.finance"
              style={{ textDecoration: "none", color: "black" }}
            >
              Get Started
            </a>
          </div>
          <div className="button89">
            <a
              href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
              style={{ textDecoration: "none", color: "white" }}
            >
              What is Xade?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
