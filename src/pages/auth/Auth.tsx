import { useEffect, useState } from 'react';
import "../../../src/assets/images/register-img.png"
import { registerImg } from '@/constants/images';

export function Auth() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTabLogin, setIsTabLogin] = useState(true); // Tracks active tab, default is login

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const handleTabSwitch = (tab) => {
    setIsTabLogin(tab === 'login');
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="pages-banner-area ptb-100">
        <div className="container">
          <div className="pages-banner-content">
            <h2
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateZ(0)' : 'scale(0.8) translateZ(0)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              Authentication
            </h2>
            <ul
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateZ(0)' : 'scale(0.8) translateZ(0)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>Auth</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Register/Login Section */}
      <div className="register-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-6">
              <div className="register-img">
                <img src={registerImg} alt="Auth Illustration" />
              </div>
            </div>

            {/* Right Side Tabs and Forms */}
            <div className="col-lg-6">
              <div className="register-form">
                <ul className="register-tab nav nav-tabs justify-content-between">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${isTabLogin ? 'active' : ''}`}
                      onClick={() => handleTabSwitch('login')}
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${!isTabLogin ? 'active' : ''}`}
                      onClick={() => handleTabSwitch('register')}
                    >
                      Register
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {isTabLogin ? (
                    // Login Form
                    <form
                      style={{
                        transform: isVisible ? 'scale(1) translateZ(0)' : 'scale(0) translateZ(0)',
                        transition: 'transform 0.5s ease',
                      }}
                    >
                      <h2>Sign in to Edmy</h2>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <button type="submit" className="default-btn">
                        Login Now
                      </button>
                    </form>
                  ) : (
                    // Register Form
                    <form
                      style={{
                        transform: isVisible ? 'scale(1) translateZ(0)' : 'scale(0) translateZ(0)',
                        transition: 'transform 0.5s ease',
                      }}
                    >
                      <h2>Create your account</h2>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="first_name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="last_name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <button type="submit" className="default-btn">
                        Register Now
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
