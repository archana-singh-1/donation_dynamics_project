import React from 'react';
import { Link } from 'react-router-dom';
import './mainContainer.css';
import Donair_details_col from './Donair_details_col';
import Slider from 'react-slick';
import { data } from './dummy_data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "gray", right: "10px", padding: "5px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "gray", left: "10px", padding: "5px" }}
      onClick={onClick}
    />
  );
}

function MainContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,  
    nextArrow: <SampleNextArrow />,  
    prevArrow: <SamplePrevArrow />,
    centerMode: true, 
    centerPadding: '5px'  
  };

  return (
    <div className="mainContainer">
      <div className="containerDetails">
        <div className="carousel-container">
          <Slider {...settings}>
            {data.map((details, index) => (
              <div key={index} className="carousel-item">
                <Donair_details_col details={details} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="grid-container">
        <div className="row">
          {data.map((details, index) => (
            <Donair_details_col key={index} details={details} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
