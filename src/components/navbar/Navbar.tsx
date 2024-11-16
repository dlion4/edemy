import { useState } from "react";
import { TopNavbar } from "./TopNavbar";
import clsx from 'clsx';
import { logoImage } from "@/constants/images";

export function Navbar(){
    const [isNavOpen, setIsNavOpen]=useState<boolean>(false)

    return (
        <>

        <TopNavbar/>

        <div id="navbar" className="navbar-area">
            <div className="desktop-nav">
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.htm">
                            <img src={logoImage} alt="logo" />
                        </a>
                        <button className={clsx("navbar-toggler navbar-toggler-right",!isNavOpen&&"collapsed")} onClick={()=>setIsNavOpen((prev)=>!prev)} type="button">
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                        <div className={clsx("collapse navbar-collapse", isNavOpen&&"show")} id="navbarSupportedContent">
                            <div className="others-options pe-0">
                                <form className="search-form style1">
                                    <input type="text" className="form-control" placeholder="Search Courses" name="search"
                                        value="" onChange={()=>{}}/>
                                    <button type="submit" className="src-btn">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </form>
                            </div>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                {/* <li className="nav-item">
                                    
                                    <a className="nav-link" href="/course/">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about/">About</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/student/">For Student</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/tutor/"> For Instructor</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="./auth/index.htm">Become An Instructor</a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="others-options">
                            <ul className="d-flex align-items-center">
                                
                                <li>
                                    <a className="default-btn" href="/auth/">
                                        <i className="ri-registered-line"></i>
                                        <span>Register Now</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}