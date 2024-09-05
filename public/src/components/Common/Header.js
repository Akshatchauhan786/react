import React from "react";
import { Link } from "react-router-dom";
import "../../style/custom.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="HeaderInner">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="#">
              <img src="images/logo.png" alt="" />
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
              <ul class="navbar-nav m-auto">
                <li>
                  <Link  to="/">
                    
                      Home
                  
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li class="dropdown">
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
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="mobileNone">
              <div className="Headercta">
                <Link to="/contact" className="cta">
                  Contact us
                </Link>
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
