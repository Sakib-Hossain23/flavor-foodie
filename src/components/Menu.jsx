import React, { useState } from 'react';
import '../App.css';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [showAll, setShowAll] = useState(false);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleViewMoreToggle = (event) => {
    event.preventDefault(); // Prevents page reload
    setShowAll(!showAll);
  };

  const filteredItems = menuItems.filter(item => 
    activeFilter === '*' || item.category === activeFilter
  );

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 9);

  return (
    <>
      
      <br /><section style={{ background: '#fff' }} className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>
        <ul className="filters_menu">
          {['*', 'pizza', 'burger', 'french', 'chowmein', 'pasta', 'drinks'].map((category, index) => (
            <li
              key={index}
              className={activeFilter === category ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
            >
              {category === '*' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        <div className="filters-content">
          <div className="row grid">
            {itemsToShow.map((item, index) => (
              <div
                key={index}
                className={`col-sm-6 col-lg-4 all ${item.category} fade-in`}
              >
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img style={{ maxHeight: '169px' }} src={item.imgSrc} alt={item.name} />
                    </div>
                    <div className="detail-box">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <div className="options">
                        <h6>${item.price}</h6>
                        <a href="">
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
            ))}
          </div>
        </div>
        <div className="btn-box">
          <a href="#" onClick={handleViewMoreToggle}>
            {showAll ? 'View Less' : 'View More'}
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

const menuItems = [
  // Your menu items array here
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 5,
    imgSrc: 'images/burger 1.png',
    category: 'burger'
  },
  // ... other items

  {
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 8,
    imgSrc: 'images/pizza.png',
    category: 'pizza'
  },
  {
    name: 'Chow Mein',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 7,
    imgSrc: 'images/noodles.png',
    category: 'chowmein'
  },
  {
    name: 'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 8,
    imgSrc: 'images/pizza.png',
    category: 'pizza'
  },
  {
    name: 'Chow Mein',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 7,
    imgSrc: 'images/noodles.png',
    category: 'chowmein'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 5,
    imgSrc: 'images/burger 1.png',
    category: 'burger'
  },
  {
    name: 'French Fries',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 4,
    imgSrc: 'images/french.png',
    category: 'french'
  },
  {
    name: 'Pasta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 6,
    imgSrc: 'images/pasta.png',
    category: 'pasta'
  },
  {
    name: 'French Fries',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 4,
    imgSrc: 'images/french.png',
    category: 'french'
  },
  {
    name: 'Soft Drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 2,
    imgSrc: 'images/d1.png',
    category: 'drinks'
  },
  {
    name: 'Lemon Drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 2,
    imgSrc: 'images/d3.png',
    category: 'drinks'
  },
  {
    name: 'Orange Drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: 2,
    imgSrc: 'images/d2.png',
    category: 'drinks'
  }
];

export default Menu;
