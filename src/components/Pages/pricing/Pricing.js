import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <div className="InnerPageBanner">
        <div className="container">
          <h1>Pricing</h1>
        </div>
      </div>

      <div className="pricingpage">
        <div className="container">
          <div className="pricingpageWrap">
            <div className="pricingpageWrapInner">
              <div className="pricingtop">
                <h2>
                  Unlock
                  <br />
                  Financial Freedom
                </h2>
                <p>
                  Join Budzet and start your <br /> journey today
                </p>
              </div>
              <div className="pricingAnnual">
                <div className="annualtoprow">
                  <div className="annualtoprowText annulatextLhs">
                    Annual Plan
                  </div>
                  <div className="annualtoprowText annualtextRhs">
                    $49.99* per year
                  </div>
                </div>
                <div className="annualsavingrow">
                  <div className="savingtag">
                    <div className="savingtagin">20% Savings!</div>
                  </div>
                </div>
              </div>

              <div className="Monthlyplanrow">
                <div className="Monthlyplanlhs">Monthly Plan</div>
                <div className="Monthlyplanrhs">$4.99* per month</div>
              </div>

              <div className="smalldetailsText">
                *USD (plus taxes where applicable)
              </div>
              <div className="pricingboxcta">
                <Link
                  className="cta"
                  to="https://mybudzet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Free 45-Days Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
