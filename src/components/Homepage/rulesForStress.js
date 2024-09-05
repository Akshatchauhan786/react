import React from 'react';
import { Link } from 'react-router-dom';

const rulesForStress = () => {
  return (
    <div className="Rulesforstress">
      <div className="container">
        <div className="tophd text-center">
          <div className="titleh2">
            <h2>
              <span>Rules for</span> Stress Free Living
            </h2>
          </div>
          <p>Be in control of your money with our easy rules.</p>
        </div>
        <div className="Rulesforstressrow">
          <div
            className="FlipBoxparent"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="Flipbox">
              <div className="FlipboxFront">
                <div className="FlipboxIcon">
                  <img src="images/rulesimg1.png" alt="" />
                </div>
                <h4>
                  <Link to="#">Make Every Dollar Work</Link>
                </h4>
              </div>
              {/*FlipboxFront*/}
              <div className="OverlayText">
                <p>
                  Tell us where you want to be, and we will show you how to get there.
                </p>
              </div>
            </div>
            {/*Flipbox*/}
          </div>
          <div
            className="FlipBoxparent"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <div className="Flipbox">
              <div className="FlipboxFront">
                <div className="FlipboxIcon">
                  <img src="images/rulesimg2.png" alt="" />
                </div>
                <h4>
                  <Link to="#">Own Your Expenses!</Link>
                </h4>
              </div>
              {/*FlipboxFront*/}
              <div className="OverlayText">
                <p>
                  Expenses like car repairs, vacation, college fees, 
                  shopping are a part of life.
                  Break them into manageable monthly amounts instead of surprises.
                </p>
              </div>
            </div>
            {/*Flipbox*/}
          </div>
          <div
            className="FlipBoxparent"
            data-aos="fade-up"
            data-aos-duration={2500}
          >
            <div className="Flipbox">
              <div className="FlipboxFront">
                <div className="FlipboxIcon">
                  <img src="images/rulesimg3.png" alt="" />
                </div>
                <h4>
                  <Link to="#">Be Flexible</Link>
                </h4>
              </div>
              {/*FlipboxFront*/}
              <div className="OverlayText">
                <p>
                "Normal" months don't exist! Stay flexible
                 and adjust your spending plan as your life changes.
                 No need for guilt—it's your money, after all! 
                </p>
              </div>
            </div>
            {/*Flipbox*/}
          </div>
          <div
            className="FlipBoxparent"
            data-aos="fade-up"
            data-aos-duration={3000}
          >
            <div className="Flipbox">
              <div className="FlipboxFront">
                <div className="FlipboxIcon">
                  <img src="images/rulesimg4.png" alt="" />
                </div>
                <h4>
                  <Link to="#">Age Your Money</Link>
                </h4>
              </div>
              {/*FlipboxFront*/}
              <div className="OverlayText">
                <p>
                Live on money earned last month, not this month's paycheck.
                 It takes practice but trust us it feels great when you are in control. 
                </p>
              </div>
            </div>
            {/*Flipbox*/}
          </div>
        </div>
        {/*Rulesforstressrow*/}
      </div>
      {/*container*/}
    </div>
  )
}

export default rulesForStress
