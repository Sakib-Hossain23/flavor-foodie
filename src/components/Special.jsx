// SpecialMenuSection.jsx

import React from 'react';

const Special = () => {
  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 600, color: '#fff' }}>
            .
            <img style={{ height: '150px' }} src="images/special.png" alt="Special" />
            .
          </h2>

          <div className="row">
            <div className="col-md-6">
              <div className="box" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="img-box">
                  <img src="images/burger 1.png" alt="Burger" />
                </div><br />
                <div className="detail-box">
                  <h5 style={{ fontWeight: 600, fontSize: '28px' }}>Burger</h5><br />
                  <h6>
                    <span style={{ fontSize: '1.9rem' }}>$5</span>
                  </h6>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Order Now
                    <img
                      style={{ width: '24px', height: '24px', marginLeft: '4px' }}
                      src="images/order5.png"
                      alt="Order Icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="img-box">
                  <img style={{ marginTop: '48px' }} src="images/pasta.png" alt="Pasta" />
                </div><br />
                <div className="detail-box">
                  <h5 style={{ fontWeight: 600, fontSize: '28px' }}>Pasta</h5><br />
                  <h6>
                    <span style={{ fontSize: '1.9rem' }}>$6</span>
                  </h6>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Order Now
                    <img
                      style={{ width: '24px', height: '24px', marginLeft: '4px' }}
                      src="images/order5.png"
                      alt="Order Icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="img-box">
                  <img style={{ marginTop: '7px', width: '55%' }} src="images/d1.png" alt="Soft Drinks" />
                </div><br />
                <div className="detail-box">
                  <h5 style={{ fontWeight: 600, fontSize: '28px' }}>Soft Drinks</h5><br />
                  <h6>
                    <span style={{ fontSize: '1.9rem' }}>$2</span>
                  </h6>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Order Now
                    <img
                      style={{ width: '24px', height: '24px', marginLeft: '4px' }}
                      src="images/order5.png"
                      alt="Order Icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="box" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="img-box">
                  <img src="images/d3.png" alt="Lemon Drinks" />
                </div><br />
                <div className="detail-box">
                  <h5 style={{ fontWeight: 600, fontSize: '28px' }}>Lemon Drinks</h5><br />
                  <h6>
                    <span style={{ fontSize: '1.9rem' }}>$2</span>
                  </h6>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Order Now
                    <img
                      style={{ width: '24px', height: '24px', marginLeft: '4px' }}
                      src="images/order5.png"
                      alt="Order Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
