import { Link } from 'react-router-dom';
import "./mainContainer.css"
import MainContains from './MainConatin.js';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MainContainer() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };

    return (
        <div className="mainContainer">
            <div className="containerDetails">
                <div className="carousel-container">
                    <Slider {...settings}>
                        <div>
                            <img src="slide_1.jpg" alt="Image 1" />
                        </div>
                        <div>
                            <img src="slide_2.jpg" alt="Image 2" />
                        </div>
                        <div>
                            <img src="slider_6.jpg" alt="Image 3" />
                        </div>
                    </Slider>
                </div>
                <Link to="/details" className="link">
                    <button className='explore'>Explore <img src="right_arrow.png" alt='' className='right_arrow' /></button>
                </Link>
                <div className="heading">Empowering Agriculture for a Sustainable Future</div>
            </div>
            <MainContains />
        </div>
    );
}

export default MainContainer;
