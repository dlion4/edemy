

import { DotLottiePlayer } from '@dotlottie/react-player';


export function InfoTutor() {


    return (

        <>

            <div className="transform-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="transform-conetnt">
                                <h2>
                                    Become a <span>Student</span> The Best Online Learning Platform
                                </h2>
                                <p>
                                    Instructors from around the world teach millions of students on Edmy. We provide the
                                    tools and skills to teach what you love. And you can also achieve your goal.
                                </p>
                                <div className="single-transform d-flex align-items-center"></div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <img src="images/icon/teaching-icon-1.svg" alt="teaching" />
                                                <h3>Expert Instruction</h3>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src="images/icon/teaching-icon-3.svg" alt="teaching" />
                                                <h3>Remote Learning</h3>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <ul className="teaching-list">
                                            <li className="d-flex align-items-center">
                                                <img src="images/icon/teaching-icon-2.svg" alt="teaching" />
                                                <h3>Lifetime Access</h3>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src="images/icon/teaching-icon-4.svg" alt="teaching" />
                                                <h3>Self Development</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="auth/index.htm">
                                    <button className="default-btn">Become A Student</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate__animated animate__fadeInRight delay-0-2s">
                            <div className="transform-img wow animate__animated animate__fadeInRight delay-0-8s">
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
                        </div>
                    </div>
                </div>
            </div>







        </>

    )

}