
import { useState } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { earn, skill, student, work } from '@/constants/images';

export function Tutor() {
    return (
        <>

            {/* Teaching Section */}
            <div className="teaching-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="teaching-content mr-15">
                                <h2>Become An Instructor on Skillcobra and Start Earning Today</h2>
                                <p>
                                    Instructors from around the world can teach and earn on Skillcobra. We provide the tools, resources, and support to help you teach what you're passionate about, while achieving your personal and professional goals.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                            <img src={earn} />
                                                <h3>Earn from Your Skills</h3>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src={skill} />
                                                <h3>Enhance Your Skillset</h3>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <ul className="teaching-list">
                                            <li className="d-flex align-items-center">
                                                <img src={ work } />
                                                <h3>Work From Home / Remotely</h3>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <img src={student} />
                                                <h3>Access to New Students</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="/auth/" className="default-btn">
                                    Become An Instructor
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="teaching-img ml-15">
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