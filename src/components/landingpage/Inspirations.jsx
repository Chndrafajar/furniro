import React from 'react';
import Button from '../Button';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [
  {
    title: 'Inner Peace',
    room: 'Bed Room',
    image: '/images/explore/Rectangle 24.png',
  },
  {
    title: '',
    room: '',
    image: '/images/explore/Rectangle 25.png',
  },
  {
    title: '',
    room: '',
    image: '/images/explore/Rectangle 24.png',
  },
  {
    title: '',
    room: '',
    image: '/images/explore/Rectangle 25.png',
  },
];

export default function Inspirations() {
  return (
    <section className="inspirations">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2>
              50+ Beautiful rooms <br />
              inspiration
            </h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <Button style={{ marginTop: '10px', width: '180px' }}>Explore More</Button>
          </div>
          <div className="col-lg-7">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                568: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1200: {
                  spaceBetween: 25,
                  slidesPerView: 2,
                },
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide">
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                    {slide.title && (
                      <div className="content-slide-item">
                        <div className="slide-content">
                          <h2 className="slide-room">
                            01 <div className="line-slide"></div> {slide.room}
                          </h2>
                          <h1 className="slide-title">{slide.title}</h1>
                        </div>
                        <div className="right-btn">
                          <img src="/images/icon/right.png" alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
