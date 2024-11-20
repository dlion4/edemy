import { CiLogin } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2"
import React from "react";


export function TopNavbar() {
  return (<> < div className = "top-header-area bg-color-0f6c76" > <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-8">
        <div className="header-left-content">
          <p>
          Learn marketable skills, talents and more
            
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <ul className="header-right-content">
          <li>
            <a href="/courses/">Courses</a>
          </li>
          <li className="auth-link">
            <a href="/auth/">
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
