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
                Live on money earned last month, not this months paycheck. It
                takes practice but trust us It feels great when you are in
                control.
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
                <Link to="#">Embrace Your Expenses</Link>
              </h4>
            </div>
            {/*FlipboxFront*/}
            <div className="OverlayText">
              <p>
                Live on money earned last month, not this months paycheck. It
                takes practice but trust us It feels great when you are in
                control.
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
                Live on money earned last month, not this months paycheck. It
                takes practice but trust us It feels great when you are in
                control.
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
                <Link to="#">Age your money</Link>
              </h4>
            </div>
            {/*FlipboxFront*/}
            <div className="OverlayText">
              <p>
                Live on money earned last month, not this months paycheck. It
                takes practice but trust us It feels great when you are in
                control.
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
