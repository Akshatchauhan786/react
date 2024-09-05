import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabCycleRef = useRef(null);

  const tabs = [
    { text: "Change", num: "1" },
    { text: "Selflessness", num: "2" },
    { text: "Perseverance", num: "3" },
    { text: "Truth", num: "4" },
    { text: "Teamwork", num: "5" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const startTabCycle = () => {
      tabCycleRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }, 3000);
    };

    startTabCycle();

    return () => clearInterval(tabCycleRef.current);
  }, [tabs.length]);

  const handleClick = (event, index) => {
    event.preventDefault();
    setActiveTab(index);
    clearInterval(tabCycleRef.current);
  };

  return (
    <div className="InnerPage">
      <div className="InnerPageBanner">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="AboutUspage">
        <div className="Abouttopsec">
          <div className="container">
            <div className="MoneyComplicatedrow">
              <div className="MoneyComplicatedLhs">
                <div className="MoneyComplicatedImg" data-aos="fade-right" data-aos-duration="1000">
                  <div className="backcurcleimg">
                    <img src="images/moneyhavnotcurcle.png" alt="" />
                  </div>
                  <div className="FrontImage">
                    <img src="images/aboutimg1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="MoneyComplicatedRhs">
                <div className="titleh2">
                  <h2>Who We Are</h2>
                </div>
                <p>
                  When it comes to taking control of your finances no one should be left behind, 
                  that is why we built AFNO, which means "MINE." AFNO also stands for Always Finding New Opportunities.
                  We are a platform of the people, by the people, for the people.
                </p>
              </div>
            </div>

            <div className="MoneyComplicatedrow secrow">
              <div className="MoneyComplicatedRhs ">
                <div className="titleh2">
                  <h2>What we do</h2>
                </div>
                <p>
                  At AFNO we challenge the status quo, take down the barriers that impede financial growth,
                  and build tools which assist you to take control of your finances. 
                </p>
              </div>
              <div className="MoneyComplicatedLhs">
                <div className="MoneyComplicatedImg" data-aos="fade-left" data-aos-duration="1000">
                  <div className="backcurcleimg">
                    <img src="images/moneyhavnotcurcle.png" alt="" />
                  </div>
                  <div className="FrontImage">
                    <img src="images/Group.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ourvisionmissionsec">
          <div className="container">
            <div className="ourvisionmissionsecrow">
              <div className="ourvisionmissionBox">
                <div className="ourvmIcon">
                  <img src="images/missionicon.png" alt="" />
                </div>
                <div className="ourvmcontent">
                  <h4>Our Mission</h4>
                  <p>To help our users take control of their financial destiny.</p>
                </div>
              </div>
              <div className="ourvisionmissionBox">
                <div className="ourvmIcon">
                  <img src="images/vissionicon.png" alt="" />
                </div>
                <div className="ourvmcontent">
                  <h4>Our Vision</h4>
                  <p>Changing the world one transaction at a time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="TabsArea">
          <div className="container">
            <div className="titleh2 text-center">
              <h2>Our Core Values</h2>
            </div>
            <div id="tab-carousel">
              <ul className="nav nav-tabs">
                {tabs.map((tab, index) => (
                  <li key={index} className={index === activeTab ? 'active' : ''}>
                    <Link to={`#${tab.text.toLowerCase().replace(' ', '')}`} onClick={(e) => handleClick(e, index)}>
                      <div className='coreveluBox'>
                        <div className='corevaluecountdiv'>{tab.num}</div>
                        <div className='corevaluetextdiv'>{tab.text}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`tab-pane ${index === activeTab ? 'active' : ''}`}
                    id={tab.text.toLowerCase().replace(' ', '')}
                  >
                    {tab.text === 'Change' ? (
                      <div>
                        <div className="MoneyComplicatedrow secrow">
                          <div className="MoneyComplicatedRhs text-size">
                            <p>
                              It is the only thing constant. We encourage sharing ideas and thoughts so we can continue to innovate
                              and serve our communities better.
                            </p>
                          </div>
                          <div className="MoneyComplicatedLhs">
                            <div className="MoneyComplicatedImg">
                              <div className="backcurcleimg">
                                <img src="images/corevalueimg1.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ""}
                    {tab.text === 'Selflessness' ? (
                      <div>
                        <div className="MoneyComplicatedrow secrow">
                          <div className="MoneyComplicatedRhs text-size">
                            <p>
                              We believe in selfless service and the only reason for our existence is for the betterment of society.
                            </p>
                          </div>
                          <div className="MoneyComplicatedLhs">
                            <div className="MoneyComplicatedImg">
                              <div className="backcurcleimg">
                                <img src="images/corevalueimg2.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ""}
                    {tab.text === 'Perseverance' ? (
                      <div>
                        <div className="MoneyComplicatedrow secrow">
                          <div className="MoneyComplicatedRhs text-size">
                            <p>
                              We believe hard work beats talent, when talent does not work hard. We consistently work hard and strive to acquire new skills to provide innovative, cost-effective solutions, and exceed our customers expectations.
                            </p>
                          </div>
                          <div className="MoneyComplicatedLhs">
                            <div className="MoneyComplicatedImg">
                              <div className="backcurcleimg">
                                <img src="images/corevalueimg3.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ""}
                    {tab.text === 'Truth' ? (
                      <div>
                        <div className="MoneyComplicatedrow secrow">
                          <div className="MoneyComplicatedRhs text-size">
                            <p>
                              We believe in transparency, honesty, and doing the right thing. We will always take the hard right vs the easy wrong.
                            </p>
                          </div>
                          <div className="MoneyComplicatedLhs">
                            <div className="MoneyComplicatedImg">
                              <div className="backcurcleimg">
                                <img src="images/corevalueimg4.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ""}
                    {tab.text === 'Teamwork' ? (
                      <div>
                        <div className="MoneyComplicatedrow secrow">
                          <div className="MoneyComplicatedRhs text-size">
                            <p>
                            It brings different skills and perspectives together 
                            which allows us to expand our horizons, adapt to the changing business environment,
                            and achieve our goals. We practice empathy as a team.
                            </p>
                          </div>
                          <div className="MoneyComplicatedLhs">
                            <div className="MoneyComplicatedImg">
                              <div className="backcurcleimg">
                                <img src="images/corevalueimg5.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
