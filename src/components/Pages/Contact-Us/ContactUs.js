import React, { useEffect } from 'react';
 
const ContactUs = () => {
  useEffect(() => {
    if (!document.getElementById('loadFormScript')) {
      const script = document.createElement('script');
      script.id = 'loadFormScript';
      script.innerHTML = `
        !function(e, t, a, i, d, n, o) {
          var WEBFORM_DATA = {
            formId: '38948ea1-3d15-4ba1-9f40-f48eb0b030b3',
            divId: '_sm_webform_',
            linkName: 'afno.salesmate.io'
          };
          WEBFORM_DATA.loadElement = t.currentScript;
          e[i] = e[i] || function () {
            (e[i].q = e[i].q || []).push(arguments)
          },
          n = t.createElement(a),
          n.onload = function () {
            if (!WEBFORM_DATA.divId || !t.getElementById(WEBFORM_DATA.divId)) {
              ld = t.createElement('div');
              ld.id = WEBFORM_DATA.formId + __salesmate_webform_iframes__.length;
              WEBFORM_DATA.loadElement.parentNode.insertBefore(ld, WEBFORM_DATA.loadElement);
              WEBFORM_DATA.divId = ld.id
            }
            SmFormSettings.loadForm(WEBFORM_DATA);
          },
          o = t.getElementsByTagName(a)[0],
          n.id = i,
          n.src = d,
          n.async = 1,
          o.parentNode.insertBefore(n, o)
        }(window, document, "script", "loadFormScript", "https://afno.salesmate.io/webforms.js");
      `;
      document.body.appendChild(script);
    }
  }, []);
 
  return (
    <>
      <div className="InnerPageBanner">
      <h1>Contact Us</h1>
      </div>
 
      <div className="InnerPage">
        <div className="contactusPage">
          <div className="container">
            
            <div className="contactusInforow">
            
            
          
            </div> 
            <div className="FormSectionrow">
              <div className="FormSectionBox">
                <div className="InfoContactBox">
                  <div className="locationIframeDiv">
                        <div className="ContactusInfoBox">
                <div className="infodflex">
                  <div className="infodflexIcon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="infodflexIcont">
                    <h4>Our Address</h4>
                    <p>1612 Coastal Hwy Lewes, DL 19958</p>
                  </div>
                </div>
              </div>
              <div className="ContactusInfoBox mt-3 ">
                <div className="infodflex">
                  <div className="infodflexIcon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="infodflexIcont">
                    <h4>Email Us</h4>
                    <p><a href="mailto:support@afnocorp.com">Support@afnocorp.com</a></p>
                  </div>
                </div>
              </div>
                 
                  </div>
                </div>
              </div>
              <div className="FormSectionBox">
                <div className="formDivarea">
                  <h3>Get in Touch</h3>
                  <div id="_sm_webform_"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ContactUs;