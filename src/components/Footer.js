import React from "react";
import "../styles/style.css";

export default function Footer() {
  return (
    <>
      <footer className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mr-auto">
              <div id="footerxade">
                <h4>XADE</h4>
              </div>
              <p className="footerx">
                Xade is compeletely non-custodial and never takes control over
                the user's funds while remaining compeletely transparent since
                all the activity is available through the block explorers.
              </p>
            </div>
            <div className="col-sm-2">
              <h5>Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCK1Bgb4A2OvXDHuCHKI7c-g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/xadefinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@XadeFinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Medium
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://instagram.com/xade.finance?"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/xadefinance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/xade-finance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/H7U3nB4Aa8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="mailto:development@xade.finance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:+919836711182" target="_blank" rel="noreferrer">
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">
              © {new Date().getFullYear()} Xade Technologies - All Rights
              Reserved
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </div>
    </>
  );
}
