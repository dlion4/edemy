import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "../../../assets/star.css"

export function Student() {
  const testimonials = [
    {
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      image: "images/testimonials/testimonial-1.png",
    },
    {
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "images/testimonials/testimonial-2.png",
    },
    {
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "images/testimonials/testimonial-3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Testimonial Section */}
      <div className="testimonial-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-img">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  className="image-swiper"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={testimonial.image}
                        alt={`testimonial-${index}`}
                        className="rounded"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-content">
                <h2>Our Students Are Our Strength. See What They Say About Us</h2>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  className="content-swiper"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-testimonial m-30">
                        <div className="testimonial-content">
                          <p>{testimonial.content}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Static Stars */}
                <div className="stars">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`star ${activeIndex === index ? "active" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}
