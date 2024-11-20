
import { DotLottiePlayer } from '@dotlottie/react-player';



export function InfoCourse() {


    return (

        <>
            <div className="section-title wow animate__animated animate__fadeInUp delay-0-2s">
                <span className="top-title">Courses</span>
                <h2>Expand Your Career Opportunity With Our Courses</h2>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6">
                    <div className="single-courses">
                        <div className="courses-main-img">
                        <script
                                    src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                                    type="module"></script>

                                <DotLottiePlayer
                                    src="https://lottie.host/7f97ea26-7f8b-4399-8982-14b780e0d46a/3f2ZzKMBEb.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                        </div>
                        <div className="courses-content">
                            <h3>Live Acoustic Guitar and Electric Guitar Lessons</h3>

                        </div>
                        <div className="courses-hover-content">
                            <div className="sk">
                                <div>
                                    <h3>
                                        <a href="/course/live-acoustic-guitar-and-electric-guitar-lessons/">
                                            Live Acoustic Guitar and Electric Guitar Lessons
                                        </a>
                                    </h3>
                                    <p>
                                        Eliminate All the Major Struggles When Getting Started With Playing Guitar. This course is the most "Direct
                                    </p>
                                    <div className="courses-btn d-flex justify-content-between align-items-center">
                                        <button className="default-btn">Add To Cart</button>
                                        <button className="default-btn wish">
                                            <i className="ri-heart-line"></i>
                                            <i className="ri-heart-fill hover"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repeat the structure for other courses */}
            </div>







        </>

    )

}