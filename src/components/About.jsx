// AboutSection.jsx

import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "We are passionate about serving delicious, freshly prepared meals made with high-quality ingredients. Our menu offers a variety of dishes to satisfy every taste, from classic favorites to exciting new flavors. Whether you're dining in or taking out, we aim to provide you with a warm, welcoming experience and food you'll love. Come in today and enjoy a great meal with us!";
  
  const shortText = fullText.split(" ").slice(0, 40).join(" ") + '...';

  return (
    <section className="about_section layout_padding">
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '40px', marginTop: '-55px' }}>About us</h2>
        <br /><br />
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/burger1.png" alt="Delicious burger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Welcome to Fresh Fare</h2>
              </div>
              <p>
                {isExpanded ? fullText : shortText}
              </p>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
