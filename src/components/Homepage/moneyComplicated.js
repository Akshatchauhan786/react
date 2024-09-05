import React from 'react';
import { Link } from 'react-router-dom';

const moneyComplicated = () => {
  return (
    <div className="MoneyComplicated">
    <div className="container">
      <div className="MoneyComplicatedrow">
        <div className="MoneyComplicatedLhs">
          <div
            className="MoneyComplicatedImg"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <div className="backcurcleimg">
              <img src="images/moneyhavnotcurcle.png" alt="" />
            </div>
            <div className="FrontImage">
              <img src="images/moneyhavenotimg.png" alt="" />
            </div>
          </div>
        </div>
        {/*MoneyComplicatedLhs*/}
        <div className="MoneyComplicatedRhs">
          <div className="titleh2">
            <h2>Money Doesn't Have to Be Complicated </h2>
          </div>
          <p>
            Are you left wondering where your hard-earned money is being spent?
            We will help you be in control of your money, so you can spend,
            save, and invest for things that matter to you!
          </p>
          <Link to="https://mybudzet.com/" target='_blank' className="cta">
          Signup Now
          </Link>
        </div>
        {/*MoneyComplicatedRhs*/}
      </div>
      {/*MoneyComplicatedrow*/}
    </div>
    {/*container*/}
  </div>
  )
}

export default moneyComplicated
