import React from 'react';


const Book = () => {
  return (
    <div>
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book A Table</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form action="">
                <div>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div>
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div>
                  <select className="form-control nice-select wide" defaultValue="">
                    <option value="" disabled>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <input type="date" className="form-control" />
                </div>
                <div className="btn_box">
                  <button type="button">Book Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <iframe
                title="Dhaka Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8340527043613!2d90.37600421536694!3d23.75088548458905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894ae6e5cdb%3A0xa6bb92b7ffb4fc9f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1609140207245!5m2!1sen!2sbd"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>


    



    </div>
  );
};

export default Book;
