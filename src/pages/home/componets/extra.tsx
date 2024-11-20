import "../../../assets/extras.css"

import { DotLottiePlayer } from '@dotlottie/react-player';

export function Extra() {
  return (
    <>
     
      <div className="business-area pb-100">
        <div className="container">
          <div className="business-bg rounded bg-color-f2f0ef ptb-100">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="business-img">
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
              <div className="col-lg-7">
                <div className="business-content">
                  <h2>Become a Member with Skillcobra's Exclusive Membership Program</h2>
                  <p>
                    Unlock a world of possibilities with our tailored membership program! With our membership, you can:
                  </p>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <ul>
                        
                      <li className="d-flex">
                          
                          <h6>AI-Driven Skill Evaluation</h6>
                          <p>Use our AI tools to assess and improve your acquired skills.</p>
                        </li>
                        <li className="d-flex">
                          
                          <h6>Real-World Problem Solving </h6>
                          <p>Apply your knowledge through hands-on projects and real-world challenges.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <ul>
                        <li className="d-flex">
                          
                          <h6>In-Depth Tests & Assessments</h6>
                          <p>Track your progress with tests and assessments from industry professionals </p>
                        </li>
                        <li className="d-flex">
                          
                          <h6>Unlimited Access to Course Materials </h6>
                          <p>Revisit course content anytime and stay updated with the latest knowledge.</p>
                        </li>
                      </ul>
                    </div>
                   
                  </div>


                  <a href="/auth/" className="default-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )


}