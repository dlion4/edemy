import React from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';


export function InfoAbout() {
    return (<> < div className="transform-area ptb-100" > <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="transform-conetnt">
                    <h2>
                        We Are
                        <span>Edmy!</span>
                        The Best Online Learning Platform
                    </h2>
                    <p>
                        Instructors from around the world teach millions of students on Edmy. We provide the tools and skills to teach what you love. And you can also achieve your goal.
                    </p>
                    <div className="single-transform d-flex align-items-center">
                        <div className="transform-video-img flex-shrink-0">


                        </div>


                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow animate__animated animate__fadeInRight delay-0-2s">
                <div className="transform-img wow animate__animated animate__fadeInRight delay-0-8s">
                    <script
                        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                        type="module"
                    ></script>


                    <DotLottiePlayer
                        src="https://lottie.host/7f97ea26-7f8b-4399-8982-14b780e0d46a/3f2ZzKMBEb.json"
                        background="transparent"
                        speed={0.5}
                        style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                        loop
                        autoplay />
                </div>
            </div>
        </div>
    </div>
    </div>
    </>);
}
