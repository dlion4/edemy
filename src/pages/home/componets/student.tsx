import { useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "swiper/swiper-bundle.css";

const testimonials = [
  {
    content:
      "Our platform ensures students receive expert guidance from highly skilled instructors, making each session a transformative experience. With a curriculum designed for real-world applicability, we provide practical, hands-on learning that empowers students to master topics and skills with ease. From foundational knowledge to advanced expertise, our approach guarantees that learners are equipped to excel in their chosen fields.",
    image: (
      <DotLottiePlayer
        src="https://lottie.host/7f97ea26-7f8b-4399-8982-14b780e0d46a/3f2ZzKMBEb.json"
        background="transparent"
        speed={0.5}
        style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        loop
        autoplay
      />
    ),
    rating: 4.5, // Correct rating for 4 full stars and 1 half star
  },
];

export default function StudentComp() {
  const [currentIndex] = useState(0); // No need to setCurrentIndex if it's static

  return (
    <div className="testimonial-area pt-10 pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonial-img">{testimonials[currentIndex]?.image}</div>
          </div>
          <div className="col-lg-6">
            <div className="testimonials-content">
              <h2>Empowering Students for Real-World Success</h2>
              <div className="testimonial-content">{testimonials[currentIndex]?.content}</div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < Math.floor(testimonials[currentIndex].rating)
                        ? "star-filled"
                        : index < testimonials[currentIndex].rating
                        ? "star-half"
                        : "star-empty"
                    }
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
