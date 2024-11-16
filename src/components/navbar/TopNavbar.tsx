import { CiLogin } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2"
import React from "react";


export function TopNavbar() {
  return (<> < div className = "top-header-area bg-color-0f6c76" > <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-8">
        <div className="header-left-content">
          <p>
            Keep learning with free resources during COVID-19.
            <a href="about-us/index.htm" className="read-more">
              Learn more
              <span className="ms-2">
              <HiArrowLongRight size={24}  />

              </span>
            </a>
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <ul className="header-right-content">
          <li>
            <a href="auth/index.htm">Become An Instructor</a>
          </li>
          <li className="auth-link">
            <a href="auth/index.htm">
              <span style={{height:"18px",width:"28px"}} className="me-2">
              <CiLogin/>
              </span>
              Signin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</>);
}
