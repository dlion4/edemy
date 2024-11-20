import React from "react";
import 'remixicon/fonts/remixicon.css';
import { DotLottiePlayer } from '@dotlottie/react-player';

export function Features() {
    return (
        <>
            <div className="transform-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow animate__animated animate__fadeInLeft delay-0-2s">
                            <div className="transform-content wow animate__animated animate__fadeInLeft delay-0-8s">
                                <h2>Invest in Yourself with New Skills for Personal Growth</h2>
                                <p>
                                    Acquiring skills is the best investment you can make for your personal and professional development. Whether you're aiming to advance in your career or unlock new opportunities, the skills you learn today will shape your future success.
                                </p>
                                <div className="single-transform d-flex align-items-center">
                                    <div className="transform-video-img flex-shrink-0">
                                        <ul>
                                            <li>
                                                <i className="ri-check-line"></i>Learn from top-notch instructors who bring their real-world experience and knowledge to the table, helping you master the skills that matter most.
                                            </li>
                                            <br/>
                                            <li>
                                                <i className="ri-check-line"></i>  Gain access to cutting-edge tools and resources that make learning easy, engaging, and effective, no matter where you are.
                                            </li>
                                            <br/>
                                            <li>
                                                <i className="ri-check-line"></i> Our tailored programs are designed to empower you to reach your personal and professional milestones with confidence.
                                            </li>
                                            <br/>
                                        </ul>

                                    </div>
                                   
                                </div>
                                <a href="/course/" className="default-btn">
                                    Find Out How
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate__animated animate__fadeInRight delay-0-2s">
                            <div className="transform-img wow animate__animated animate__fadeInRight delay-0-8s">

                                <script
                                    src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                                    type="module"></script>

                                <DotLottiePlayer
                                    src="https://lottie.host/dea2d406-ab47-4b85-a112-e636d396e3c2/MTRItZd3ex.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-features-area bg-color-f1efee pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Our Features</span>
                        <h2>Why You Should Choose SkillCobra</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
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
                                <h3>Modern Learning Technology</h3>
                                <p>We use cutting-edge technology and innovative teaching methods to deliver the most relevant skills for you.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/0b867e7b-0b18-4abd-bbe9-48d15f0d9123/QCx7pVoUaD.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Diverse Course Library</h3>
                                <p>We offer a wide range of courses in Web Development, AI, IT, Adobe Design, Digital Marketing, and more.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/2db7ca9e-0d45-4d33-88da-15c91b2fc4c1/SJ9Y0763mm.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>24/7 Learner Support</h3>
                                <p>Got questions or need help? Our support team is always available to guide and assist you, anytime, anywhere.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/9003c986-8179-4c1c-ac71-1144d9623126/QRYVLHgLAx.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Expert-Led Courses</h3>
                                <p>Learn directly from industry leaders and professionals who bring real-world expertise and knowledge to every course.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/a85a21ca-d8e0-4f30-a4e2-511dbe0e08bf/gY7m2656bR.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Lifetime Access</h3>
                                <p>You get lifetime access to your courses. Learn at your own pace and revisit lessons whenever you need.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/3135502a-3008-403d-bad3-8e4ed03b493a/Tuo3dw8oK1.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Flexible Learning Options</h3>
                                <p>Choose between self-paced learning or live instructor-led sessions, depending on your preference and schedule.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/ed5752da-62f9-4fc2-9f42-4d054a648721/SwZDU03LlA.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Business Growth Skills</h3>
                                <p>Empower your career or business with top-notch courses in management, marketing strategies, and entrepreneurship.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features">
                                <DotLottiePlayer
                                    src="https://lottie.host/2bdddd26-519a-4e93-982a-669d37395020/DHyCFtW0F0.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                                <h3>Structured Learning Pathways</h3>
                                <p>Tailored course from foundational concepts to advanced expertise for complete beginners or those looking to upskill</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )


}