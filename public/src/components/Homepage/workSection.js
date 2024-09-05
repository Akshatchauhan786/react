import React from 'react'

const workSection = () => {
  return (
    <div className="HowItWorksection">
    <div className="container">
      <div className="titleh2">
        <h2>
          <span>How NAB </span> Works
        </h2>
      </div>
      <div className="HowItWorksectionrow">
        <div className="HowItWorkLhs">
          <div
            className="HowItWorkiconText"
            data-aos="fade-right"
            data-aos-duration={1000}
          >
            <div className="HownabIcon">
              <img src="images/nabwork1.png" alt="" />
            </div>
            {/*HownabIcon*/}
            <div className="HownabText">
              <h4>Sign up for free!</h4>
              <p>
                Start your journey today. No credit card or commitment needed.
              </p>
            </div>
            {/*HownabText*/}
          </div>
          {/*HowItWorkiconText*/}
          <div
            className="HowItWorkiconText"
            data-aos="fade-right"
            data-aos-duration={2000}
          >
            <div className="HownabIcon">
              <img src="images/nabwork2.png" alt="" />
            </div>
            {/*HownabIcon*/}
            <div className="HownabText">
              <h4>Have a money plan</h4>
              <p>
                Add your accounts, expenses, debts, savings, goals, and create a
                to-do list.
              </p>
            </div>
            {/*HownabText*/}
          </div>
          {/*HowItWorkiconText*/}
          <div
            className="HowItWorkiconText"
            data-aos="fade-right"
            data-aos-duration={3000}
          >
            <div className="HownabIcon">
              <img src="images/nabwork3.png" alt="" />
            </div>
            {/*HownabIcon*/}
            <div className="HownabText">
              <h4>Be in control</h4>
              <p>
                Feel confident, content, and secure about your finances. Hey!
                you may even sleep better.
              </p>
            </div>
            {/*HownabText*/}
          </div>
          {/*HowItWorkiconText*/}
        </div>
        {/*HowItWorkLhs*/}
        <div className="HowItWorkRhs">
          <div
            className="nabImg"
            data-aos="zoom-in-up"
            data-aos-duration={2000}
          >
            <div className="nabImgBack">
              <img src="images/nabcurcle.png" alt="" />
            </div>
            <div className="nabImgFront">
              <img src="images/nabfrontimg.png" alt="" />
            </div>
          </div>
        </div>
        {/*HowItWorkRhs*/}
      </div>
      {/*HowItWorksectionrow*/}
    </div>
    {/*container*/}
  </div>
  )
}

export default workSection
