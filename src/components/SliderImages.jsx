import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    title: 'Inner Peace',
    room: 'Bed Room',
    image: '/images/explore/Rectangle 24.png',
  },
  {
    title: '',
    room: '',
    image: '/images/explore/Rectangle 24.png',
  },
];

const SliderImages = () => {
  return (
    <div className="sliderImages">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              {slide.title && (
                <div className="slide-content">
                  <h2 className="slide-room">{slide.room}</h2>
                  <h1 className="slide-title">{slide.title}</h1>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImages;
