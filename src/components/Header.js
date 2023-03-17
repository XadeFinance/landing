import React, { useEffect, useRef } from "react";
import "../styles/style.css";

export default function Header() {
  return (
    <>
      <section className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="#">
              <div className="name">XADE</div>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars text-white" />
              <span data-feather="grid" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto desktop-arrangement-navbar">
                <div>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#FAQ-Section" className="nav-link page-scroll">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link page-scroll"
                      href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
                    >
                      Blog
                    </a>
                  </li>
                </div>
                <div>
                  <li className="Community">
                    <a
                      className="nav-link page-scroll"
                      target="_blank"
                      href="https://testflight.apple.com/join/ppdLa9dl"
                      rel="noreferrer"
                    >
                      <div className="tack">iOS App</div>
                    </a>
                  </li>
                  &nbsp; &nbsp;
                  <li className="webapp">
                    <a
                      className="nav-link page-scroll"
                      target="_blank"
                      href="https://mint.xade.finance/app-universal-release.apk"
                      rel="noreferrer"
                    >
                      <div className="greytack">Android App</div>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
