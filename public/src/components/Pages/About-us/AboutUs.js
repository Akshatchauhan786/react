import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { text: "Change", num: "1" },
    { text: "Selflessness", num: "2" },
    { text: "Perseverance", num: "3" },
    { text: "Truth", num: "4" },
    { text: "Teamwork", num: "5" },
  ];

  useEffect(() => {
    const tabChange = () => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    };

    const tabCycle = setInterval(tabChange, 3000);

    return () => clearInterval(tabCycle);
  }, [tabs.length]);

  useEffect(() => {
    const handleClick = (index) => {
      setActiveTab(index);
    };

    const tabLinks = document.querySelectorAll('.nav-tabs a');
    tabLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        handleClick(index);
      });
    });

    return () => {
      tabLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [tabs.length]);

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
                  When it comes to taking control of your finances no one should be left behind, that is why we built
                  AFNO which means "MINE." We are a platform of the people, by the people, for the people. !
                </p>
              </div>
            </div>

            <div className="MoneyComplicatedrow secrow">
              <div className="MoneyComplicatedRhs">
                <div className="titleh2">
                  <h2>Who We Are</h2>
                </div>
                <p>
                  When it comes to taking control of your finances no one should be left behind, that is why we built
                  AFNO which means "MINE." We are a platform of the people, by the people, for the people. !
                </p>
              </div>
              <div className="MoneyComplicatedLhs">
                <div className="MoneyComplicatedImg" data-aos="fade-left" data-aos-duration="1000">
                  <div className="backcurcleimg">
                    <img src="images/moneyhavnotcurcle.png" alt="" />
                  </div>
                  <div className="FrontImage">
                    <img src="images/aboutimg2.png" alt="" />
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

        <div className="coreValue" style={{ display: "none" }}>
          <div className="container">
            <div className="titleh2 text-center">
              <h2>Our Core Values</h2>
            </div>
            <div className="coreValueIn">
              <div className="coreValuerow">
                <div className="coreveluBox">
                  <div className="corevaluecountdiv">1</div>
                  <div className="corevaluetextdiv">Change</div>
                </div>
                <div className="coreveluBox">
                  <div className="corevaluecountdiv">2</div>
                  <div className="corevaluetextdiv">Selflessness</div>
                </div>
                <div className="coreveluBox">
                  <div className="corevaluecountdiv">3</div>
                  <div className="corevaluetextdiv">Hardwork</div>
                </div>
                <div className="coreveluBox">
                  <div className="corevaluecountdiv">4</div>
                  <div className="corevaluetextdiv">Truth</div>
                </div>
                <div className="coreveluBox">
                  <div className="corevaluecountdiv">5</div>
                  <div className="corevaluetextdiv">Teamwork</div>
                </div>
              </div>
              <div className="MoneyComplicatedrow secrow">
                <div className="MoneyComplicatedRhs">
                  <p>
                    It is the only thing constant. We encourage sharing ideas and thoughts so we can continue to innovate
                    and serve our communities better.
                  </p>
                </div>
                <div className="MoneyComplicatedLhs">
                  <div className="MoneyComplicatedImg" data-aos="fade-left" data-aos-duration="1000">
                    <div className="backcurcleimg">
                      <img src="images/aboutcurcle3.png" alt="" />
                    </div>
                    <div className="FrontImage">
                      <img src="images/aboutimg3.png" alt="" />
                    </div>
                  </div>
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

                    <Link to={`#${tab.text.toLowerCase().replace(' ', '')}`}>
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
                    {tab.text === 'Change' ? <div>
                      <div className="MoneyComplicatedrow secrow">
                        <div className="MoneyComplicatedRhs">
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
                    </div> : ""}
                    {tab.text === 'Selflessness' ? <div>
                      <div className="MoneyComplicatedrow secrow">
                        <div className="MoneyComplicatedRhs">
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
                    </div> : ""}
                    {tab.text === 'Perseverance' ? <div>
                      <div className="MoneyComplicatedrow secrow">
                        <div className="MoneyComplicatedRhs">
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
                    </div> : ""}
                    {tab.text === 'Truth' ? <div>
                      <div className="MoneyComplicatedrow secrow">
                        <div className="MoneyComplicatedRhs">
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
                    </div> : ""}
                    {tab.text === 'Teamwork' ? <div>
                      <div className="MoneyComplicatedrow secrow">
                        <div className="MoneyComplicatedRhs">
                          <p>
                          We cannot make a measurable impact without teamwork. We practice empathy as a team. Teamwork brings together different skills and perspectives which allows us to expand our horizons, adapt to the changing business environment, and achieve our goals.  
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
                    </div> : ""}
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
