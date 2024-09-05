import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    fullEmail: '',
    number: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint
    const apiEndpoint = 'http://localhost:5000/contact';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Message sent successfully');
        // Reset form
        setFormData({
          fname: '',
          lname: '',
          number: '',
          email: '',
          message: ''
        });
      } else {
        setSubmissionStatus('Failed to send message');
      }
    } catch (error) {
      setSubmissionStatus('An error occurred');
    }
  };

  return (
    <>
      <div className="InnerPageBanner">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="InnerPage">
        <div className="contactusPage">
          <div className="container">
            <div className="titleh2 text-center mb-4">
              <h2>Get in touch</h2>
            </div>
            <div className="contactusInforow">
              <div className="ContactusInfoBox">
                <div className="infodflex">
                  <div className="infodflexIcon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="infodflexIcont">
                    <h4>Our Address</h4>
                    <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                  </div>
                </div>
              </div>
              <div className="ContactusInfoBox">
                <div className="infodflex">
                  <div className="infodflexIcon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="infodflexIcont">
                    <h4>Email Us</h4>
                    <p><a href="mailto:support@example.com">support@example.com</a></p>
                  </div>
                </div>
              </div>
              <div className="ContactusInfoBox">
                <div className="infodflex">
                  <div className="infodflexIcon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="infodflexIcont">
                    <h4>Call Us</h4>
                    <p><a href="tel:1234567890">123 456 7890</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="FormSectionrow">
              <div className="FormSectionBox">
                <div className="InfoContactBox">
                  <div className="locationIframeDiv">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4005184718503!2d144.95453057463885!3d-37.804086633482974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d33b7f9a9d1%3A0x615ec2ddd8da29d5!2s329%20Queensberry%20St%2C%20North%20Melbourne%20VIC%203051%2C%20Australia!5e0!3m2!1sen!2sin!4v1717070930390!5m2!1sen!2sin"
                      width="500"
                      height="300"
                      style={{ border: '0px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="FormSectionBox">
                <div className="formDivarea">
                  <form onSubmit={handleSubmit}>
                    <div className="formrow">
                      <div className="formgroup">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="formgroup">
                        <input
                          type="text"
                          name="fullEmail"
                          placeholder="Last Name"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="formrow">
                      <div className="formgroup">
                        <input
                          type="tel"
                          name="number"
                          placeholder="Number"
                          value={formData.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="formgroup">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="TextAreaDiv">
                      <textarea
                        rows="3"
                        name="message"
                        placeholder="Message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="formcta">
                      <input type="submit" name="submit" className="cta" value="Submit" />
                    </div>
                    {submissionStatus && (
                      <div className="submission-status">
                        {submissionStatus}
                      </div>
                    )}
                  </form>
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
