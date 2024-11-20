
import { laptop, learning, lifetime, self1 } from '@/constants/images';
import { DotLottiePlayer } from '@dotlottie/react-player';



export function InfoStudent() {


    return (

        <>

            <div className="transform-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-lg-6">
                            <div className="transform-content">
                                <h2>
                                    Become a <span>Student</span> at SkillCobra - The Best Online Learning Platform
                                </h2>
                                <p>
                                    SkillCobra equipes you with transformative skill development, connecting learners with expert instructors from around the globe.
                                    Our platform is designed to provide a seamless and engaging learning experience, offering cutting-edge tools, industry-relevant
                                    courses, and flexible learning options to suit your unique goals. Whether you're advancing in your career, exploring new opportunities,
                                    or unlocking your creative potential, We equips you with the skills that truly matter. Join a thriving community of learners
                                    and professionals, and discover why investing in your personal and professional growth is the best decision you can make.
                                    With SkillCobra, you  master the art of success.
                                </p>


                                {/* Features Section */}
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <img src={learning}  />
                                                <h6>  Expert Instruction</h6>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src={laptop} />
                                                <h6>Remote Learning</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <ul className="teaching-list">
                                            <li className="d-flex align-items-center">
                                                <img src={lifetime} />
                                                <h6>Lifetime Access</h6>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src={self1} />
                                                <h6>Self Development</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Call to Action Button */}
                                <a href="/auth/">
                                    <button className="default-btn">Become A Student</button>
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-lg-6 wow animate__animated animate__fadeInRight delay-0-2s">
                            <div className="transform-img wow animate__animated animate__fadeInRight delay-0-8s">
                                <DotLottiePlayer
                                    src="https://lottie.host/7f97ea26-7f8b-4399-8982-14b780e0d46a/3f2ZzKMBEb.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>

    )

}