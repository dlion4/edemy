import { bannerBg, shape1, shape2, shape3 } from "@/constants/images";
import React from "react";

import { DotLottiePlayer } from '@dotlottie/react-player';

export function Hero() {
    // Split the sentence into an array of words and include spaces explicitly
    const words = ["Improve ", " ", "Your ", " ", "Online ", " ", "Learning ", " ", "Experience"];

    return (
        <>
            <div
                className="banner-area bg-1"
                style={{

                    backgroundImage: `url(${bannerBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-img">
                                
                                <script
                                    src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
                                    type="module"></script>

                                <DotLottiePlayer
                                    src="https://lottie.host/72f4f166-4b0a-40f3-a5e6-cd76751e79a7/CF1loKNtx7.json"
                                    background="transparent"
                                    speed={0.5}
                                    style={{ width: "100%", height: "auto", maxWidth: "600px" }} // Fixed: Added a comma between width and height
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1>
                                    {words.map((word, wordIndex) => (
                                        <React.Fragment key={wordIndex}>
                                            <span className="#">
                                                {Array.from(word).map((letter, letterIndex) => (
                                                    <span
                                                        key={letterIndex}
                                                        className="letter"
                                                        style={{
                                                            animationDelay: `${(wordIndex * word.length + letterIndex) * 0.1}s`,
                                                        }}
                                                    >
                                                        {letter}
                                                    </span>
                                                ))}
                                            </span>
                                            {/* Add a space after each word, except the last one */}
                                            {wordIndex < words.length - 1 && <span className="space"> </span>}
                                        </React.Fragment>
                                    ))}
                                </h1>

                                <p style={{ opacity: 1, transform: "scale(0.8) translateZ(1)" }}>
                                    We have
                                    <span> 500+ </span>
                                    Online courses ;
                                    <span> 120+ </span> Online registered students. Find your desired Courses from them.
                                </p>
                                <form className="search-form">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Courses"
                                        name="search"
                                        value=""
                                    />
                                    <button type="submit" className="default-btn">
                                        <span>Search Now</span>
                                        <i className="ri-search-line"></i>
                                    </button>
                                </form>
                                <ul className="client-list">
                                    <li>
                                        <p>
                                            1500+ People already trusted us.
                                            <a href="/courses/" className="read-more">
                                                View Courses
                                                <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={shape1} className="shape shape-1" alt="banner" />
                <img src={shape2} className="shape shape-2" alt="banner" />
                <img src={shape3} className="shape shape-3" alt="banner" />
            </div>
        </>
    );
}
