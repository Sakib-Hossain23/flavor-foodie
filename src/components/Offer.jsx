import React from 'react';

const Offer = () => {
  return (


    <section className="offer_section layout_padding-bottom">
  <div className="offer_container">
    <div className="container">
      <h2 style={{ textAlign: 'center', fontWeight: 600, color: '#fff' }}>
        .
        <img style={{ height: '125px' }} src="images/offer5.png" alt="Offer" />
        .
      </h2>

      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src="images/burger 1.png" alt="Burger" />
            </div>
            <div className="detail-box">
              <h5 style={{ fontWeight: 600 }}>Burger</h5>
              <h6>
                <span>25%</span> Off
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
          <div className="box">
            <div className="img-box">
              <img style={{ marginTop: '-16px' }} src="images/pizza.png" alt="Pizza" />
            </div>
            <div className="detail-box">
              <h5 style={{ fontWeight: 600 }}>Pizza</h5>
              <h6>
                <span>30%</span> Off
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

  )
};

export default Offer;