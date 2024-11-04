import React, { useEffect, useState } from 'react';

import Offer from '../components/Offer';
import Menu from '../components/Menu';
import Book from '../components/Book';
import Footer from '../components/Footer';
import About from '../components/About';
import Special from '../components/Special';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      title: 'A place to hang out with food',
      img: 'images/r6.jpg', // You can set different images for each slide here if needed
    },
    {
      id: 1,
      title: 'Enjoy your favorite meals',
      img: 'images/r6.jpg', // Change to the actual image path
    },
    {
      id: 2,
      title: 'Relax & unwind with friends',
      img: 'images/r6.jpg', // Change to the actual image path
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    },5000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div>
      <div className="hero_area">
        <div className="bg-box">
          <img src={slides[currentSlide].img} alt="" />
        </div>

        {/* Slider Section */}
        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={slide.id} className={`carousel-item ${currentSlide === index ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>{slide.title}</h1>
                          <div className="btn-box">
                          <a href="#" className="btn1" onClick={(e) => e.preventDefault()}>Order Now</a>    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                {slides.map((_, index) => (
                  <li key={index} data-target="#customCarousel1" data-slide-to={index} className={currentSlide === index ? 'active' : ''}></li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        {/* End Slider Section */}
      </div>

      <Offer />
      <Menu />
      <Special />
      <About />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;