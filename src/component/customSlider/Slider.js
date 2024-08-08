import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import image1 from './image1.png'; // Ensure the path to the image is correct

const sliderItems = [
  { image: image1, title: 'Deafdeef', description: 'Floor: 0,1 ETH' },
  { image: image1, title: 'Deafdeef', description: 'Floor: 0,1 ETH' },
  { image: image1, title: 'Deafdeef', description: 'Floor: 0,1 ETH' },
];

const CustomSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    customPaging: i => (
      <div className="custom-dot">
        <div className="progress-indicator">
          <div className="progress"></div>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className='slider-title'>Top Collections NFT</h2>
      <div className="slider-body">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="slider-item" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="slider-item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomSlider;
