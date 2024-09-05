import React from "react";
import { Link } from "react-router-dom";
import "../../style/custom.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="HeaderInner">
          <nav className="navbar navbar-expand-lg pt-0 pb-0">
            <Link className="navbar-brand" to="#">
              <img src="images/logomain.svg" alt="" />
            </Link>
            <div className="Togglebar">
              <div className="desktopNone">
                <div className="Headercta">
                  <Link to="#" className="cta">
                    Contact us
                  </Link>
                </div>
                {/*Headercta"*/}
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor04"
                aria-controls="navbarColor04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            {/* <div className="collapse navbar-collapse" id="navbarColor04">
            <ul className="navbar-nav m-auto">
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div> */}
            <div class="collapse navbar-collapse" id="navbarColor04">
              <ul class="navbar-nav ms-auto">
                <li>
                  <Link  to="/">
                    
                      Home
                  
                  </Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                

                {/* <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Send Money
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Debit Card</a>
                </li>
                <li>
                  <a href="#">Saving</a>
                </li>
                <li>
                  <a href="#">Investing</a>
                </li> */}
                
                {/* <li>
                  <Link to="blog">Blog</Link>
                </li> */}
                <li>
                <div className="Headercta-mobile">
                <Link to="/contact" className="cta">
                  Contact us
                </Link>
              </div>
                </li>
              </ul>
            </div>
           
            <div className="mobileNone">
              <div className="headerctagroup">
            <Link to="https://mybudzet.com/" target="_blank" className="cta freetrail">
               Sign In
              </Link>
              <div className="Headercta">
                <Link to="/contact" className="cta">
                  Contact us
                </Link>
              </div>
              </div>
              {/*Headercta"*/}
            </div>
          </nav>
        </div>
        {/*HeaderInner*/}
      </div>
      {/*container*/}
    </header>
  );
};

export default Header;
