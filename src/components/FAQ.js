import React from "react";
import "../styles/style.css";

export default function FAQ() {
  return (
    <>
      <div id="FAQ-Section" className="faqs">
        <div className="faqmain">Frequently asked questions</div>
        <div className="faqbox">
          <div className="faqhead">What is Xade?</div>
          <div className="faqcontent">
            Xade is the one stop solution for all your finances where all
            banking services are provided in a better,permissionless and
            efficient manner.
          </div>
        </div>
        <div className="faqbox">
          <div className="faqhead">How safe is Xade?</div>
          <div className="faqcontent">
            Xade is compeletely non-custodial and decentralised where all
            activity appears on chain. All the smart contracts are certified and
            audited.
          </div>
        </div>
        <div className="faqbox">
          <div className="faqhead">How is Xade different from banks?</div>
          <div className="faqcontent">
            Xade is compeletely autonomus with no human involvement while
            remaining compeletely non-custodial and on chain which makes us more
            efficient and accessible.
          </div>
        </div>
        <div className="faqbox">
          <div className="faqhead">
            How is Xade different from DeFi protocols?
          </div>
          <div className="faqcontent">
            Xade provides an easy to use and familiar user experience of a
            neobank powered by DeFi Protocols which are created to mirror
            financial services in a sustainable manner.
          </div>
        </div>
        <div className="faqbox">
          <div className="faqhead">What is Xade V0?</div>
          <div className="faqcontent">
            XADE V0 is a test launch for Xade Finance to get feedback about the
            user experience and test our infrastracture in real world
            situations.
          </div>
        </div>
      </div>
    </>
  );
}
