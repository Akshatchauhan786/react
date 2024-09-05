import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="HeroBannersection">
      <div className="HeroBanner">
        <div className="container">
          <div className="twocolumnrow">
            <div
              className="ContentSec"
              data-aos="fade-right"
              data-aos-duration={2000}
            >
              <h1>Change the way You Think about Money</h1>
              <p>Enjoy stress-free spending and effortless budgeting with NAB.</p>
              <Link to="#" className="cta">
                Start for free trial
              </Link>
            </div>
            {/* ContentSec */}
            <div className="ImgSection">
              <div className="formobileimg">
                <img src="images/bannerimgformobile.png" alt="" />
              </div>
              <div
                className="ImgLayeranimation"
                data-aos="fade-left"
                data-aos-duration={3000}
              >
                <div className="ImgLayeranimationIn">
                  <div className="ImgLayeranimationInner">
                    <div className="Imgback">
                      <div className="Img1">
                        <img src="images/shapimg1.png" alt="" />
                      </div>
                      <div className="Img2">
                        <img src="images/shapimg2.png" alt="" />
                      </div>
                      <div className="Img3">
                        <img src="images/shapimg3.png" alt="" />
                      </div>
                    </div>
                    <div className="ImgFront">
                      <div className="imgf1">
                        <img src="images/bannerimg2.png" alt="" />
                      </div>
                      {/* <div class="imgf2"></div> */}
                    </div>
                  </div>
                  {/* ImgLayeranimationInner */}
                </div>
                {/* ImgLayeranimationIn */}
              </div>
              {/* ImgLayeranimation */}
            </div>
            {/* ImgSection */}
          </div>
          {/* twocolumnrow */}
        </div>
        {/* container */}
      </div>
      {/* HeroBanner */}
      <div className="bannercurvlayer">
        {/* <img src="images/bannerlayer.svg" alt="" /> */}
      </div>
      {/* bannercurvlayer */}
    </div>
  );
};

export default Banner;
