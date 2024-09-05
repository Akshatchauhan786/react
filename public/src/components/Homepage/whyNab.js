import React from 'react'

const whyNab = () => {
  return (
    <div className="WhyNAB">
    <div className="container">
      <div className="titleh2 text-center">
        <h2>
          <img src="images/line.png" alt="" />
          <span>Why</span> NAB <img src="images/line.png" alt="" />
        </h2>
      </div>
      <div className="WhyNABrow">
        <div className="shadowBox" data-aos="fade-up" data-aos-duration={1000}>
          <div className="ShadowIcon">
            <img src="images/whynabicon1.png" alt="" />
          </div>
          <div className="shadowText">
            <h4>Secure</h4>
            <p>
              We use bank-level security and powerful 256-bit encryption 24/7 to
              keep your data secure.
            </p>
          </div>
        </div>
        {/*shadowBox*/}
        <div className="shadowBox" data-aos="fade-up" data-aos-duration={2000}>
          <div className="ShadowIcon">
            <img src="images/whynabicon2.png" alt="" />
          </div>
          <div className="shadowText">
            <h4>Personalized</h4>
            <p>
              NAB adapts to your unique financial needs so you can achieve your
              financial goals.
            </p>
          </div>
        </div>
        {/*shadowBox*/}
        <div className="shadowBox" data-aos="fade-up" data-aos-duration={3000}>
          <div className="ShadowIcon">
            <img src="images/whynabicon3.png" alt="" />
          </div>
          <div className="shadowText">
            <h4>Peace of Mind</h4>
            <p>
              &nbsp;Cover all your bases and start feeling confident, secure,
              and content in your financial life.&nbsp;&nbsp;
            </p>
          </div>
        </div>
        {/*shadowBox*/}
      </div>
      {/*WhyNABrow*/}
    </div>
    {/*container*/}
  </div>
  )
}

export default whyNab
