import React from "react";
import { Link } from 'react-router-dom'

const notfound = () => {
  return (
    <div className="InnerPage">
      <div className="Pagenotfoundmain">

      {/* <div className="InnerPageBanner"><div className="container">
          <h1>404</h1>  </div>
        </div> */}
      <div className="container">
        <div className="notfoundpage">
          <div className="notfoundpageImg">
            <img src="images/errorimg.png" alt="" />
          </div>
          <div className="notfoundpageText">
            <h4>Page not found</h4>
            <p>The page you are looking for does not exist.</p>
           <Link to="/" className="cta">Back to home</Link>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default notfound;
