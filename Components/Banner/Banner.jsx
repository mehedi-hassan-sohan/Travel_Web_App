"use client"
import React, { useState } from 'react';
import './Banner.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const items = [
    {
      backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
      name: 'Switzerland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      backgroundImage: 'https://i.ibb.co/jrRb11q/img2.jpg',
      name: 'Finland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      backgroundImage: 'https://i.ibb.co/NSwVv8D/img3.jpg',
      name: 'Iceland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      backgroundImage: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
      name: 'Australia',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      backgroundImage: 'https://i.ibb.co/jTQfmTq/img5.jpg',
      name: 'Netherland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      backgroundImage: 'https://i.ibb.co/RNkk6L0/img6.jpg',
      name: 'Ireland',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
  ];

  return (
    <div className="container">
      <div className="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${activeIndex === index && 'active'}`}
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrevClick}>
        <FaArrowLeft className='ms-2 text-black'/>
        </button>
        <button className="next" onClick={handleNextClick}>
        <FaArrowRight className='ms-2 text-black'/>
        </button>
      </div>
    </div>
  );
};

export default Banner;
