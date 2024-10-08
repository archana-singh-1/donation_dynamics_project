import React from 'react';
import './mainContainer.css';
import Donair_details_col from './Donair_details_col';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { data } from './dummy_data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "black", fontSize: "26px", }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: "black", fontSize: "26px" }} />
    </div>
  );
}


function MainContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,  
    centerPadding: '10px',  
  };

  const scrollToGrid = () => {
    document.getElementById('grid-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mainContainer">
      <div className="containerDetails">
        <div className="carousel-container">
          <Slider {...settings}>
            {data.map((details, index) => (
              <div key={index} className="carousel-item">
                <a href="#grid-section" onClick={scrollToGrid} className='anchorTag'>
                <div className="donation-card">

                    <img src={details.imgSrc} alt={details.title} className="donation-img" />
                  <h3>{details.title}</h3>
                  <p>{details.description}</p>
                </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
            <Link to="/details">
                <img src="right_arrow.png" alt="" className='detailsArrow'/>
            </Link>

           
      
      <div className="grid-container" id="grid-section">
        <p className='gallery'>Give monthly</p>
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
