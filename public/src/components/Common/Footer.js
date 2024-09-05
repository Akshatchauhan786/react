import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'; // Adjust the path based on your setup
import '../../style/custom.css';
import { BsDisplay } from 'react-icons/bs';

const Footer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated fetching of blog data
    // Replace this with actual fetching logic from an API or local data source
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data); // Assuming data is an array of blog objects
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means fetch once when component mounts

  return (
    <>
      <footer>
        <div className="footerIn">
          <div className="container">
            <div className="footerTop">
              <div className="flogo">
                <Link to="#">
                  <img src="images/footerlogo.png" alt="" />
                </Link>
              </div>
              <div className="subcribeform">
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address here"
                    required=""
                  />
                  <button className="btn" type="submit">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            <div className="footerMenu">
              <div className="footerWidget">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/termandcondition">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="footerWidget">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/termandcondition">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
              {/* Commenting out static Blog widget */}
              <div className="footerWidget">
                <h4>Blog</h4>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
              {/* Rendering dynamic Blog widget */}
              {/* {blogs.length > 0 && (
                <div className="footerWidget">
                  <h4>Blog</h4>
                  <ul>
                    {blogs.slice(0, 3).map((blog) => (
                      <li key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
              {/* End dynamic Blog widget */}
              <div className="footerWidget">
                <h4>Contact Us</h4>
                <div className="footerInfo">
                  <div className="footerInfoflex">
                    <div className="Iconfinfo">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <Link to="#">
                      329 Queensberry Street, North Melbourne VIC 3051, Australia.
                    </Link>
                  </div>
                  <div className="footerInfoflex">
                    <div className="Iconfinfo">
                      <i className="fas fa-phone" />
                    </div>
                    <Link to="tel:1234567890">123 456 7890</Link>
                  </div>
                  <div className="footerInfoflex">
                    <div className="Iconfinfo">
                      <i className="fas fa-envelope" />
                    </div>
                    <Link to="mailto:support@example.com">support@example.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="socialIcon">
              <Link to="#">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link to="#">
                <i className="fab fa-youtube" />
              </Link>
            </div>
            <div className="subfooter">
              <p>Copyright © 2024, AFNO. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
