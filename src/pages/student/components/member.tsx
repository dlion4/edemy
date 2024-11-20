import { DotLottiePlayer } from '@dotlottie/react-player';


export function MemberStudent() {
  return (
    <>
      {/* Business Section */}
      <div className="business-area pb-100">
        <div className="container">
          <div className="business-bg rounded bg-color-f2f0ef ptb-100">
            <div className="row align-items-center">
              <div className="col-lg-7">
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
              <div className="col-lg-5">
                <div className="business-content">
                  <h2>Be A Member Of Edmy Business & Start Earning Limitless Today</h2>
                  <p>
                    Instructors from around the world teach millions of students on Edmy. We
                    provide the tools and skills to teach what you love. And you can also achieve your goal with us.
                  </p>
                  <a href="auth/index.htm" className="default-btn">
                    Get Edmy Business
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