import React, { useEffect } from 'react'
import Slider from 'react-slick'
import styles from '../styles/Slideshow.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Slideshow = ({ images }) => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          }
        ]
      };
    return (
        <div className={styles.slideShowWrapper}>
            <Slider {...settings}>
                {images.map(image => (
                    <div className={styles.slide}>
                        <img 
                            src={image.src} 
                            alt={image.title} 
                        />
                    </div>    
                ))}
            </Slider>
        </div>
    )
}