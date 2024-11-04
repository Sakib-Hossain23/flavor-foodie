import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" onClick={(e) => e.preventDefault()} className="footer-logo">
                Fresh Fare
              </a>
              <div className="footer_social">
                {/* Social icons could be added here if needed */}
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="tel:+01000000000">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01.........</span>
                </a>
                <a href="mailto:example@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>example@gmail.com</span>
                </a>
              </div>

              <div className="footer_social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear">{new Date().getFullYear()}</span> Fresh Fare, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
