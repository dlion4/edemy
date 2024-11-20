import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faDollarSign, faMedal, faRobot, faTools,  faUsers } from "@fortawesome/free-solid-svg-icons";

import "../../../assets/custome.css"
import "../../../assets/custome.css"

export function Benefits() {
  return (
    <>
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4><span>Benefits for Our</span> Users</h4>
              <p>
                We provide unparalleled benefits and privileges to both student users and instructor users.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_one"><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                <h6>Affordable and Flexible Learning</h6>
                <p>Access high-quality courses at budget-friendly prices, with the flexibility to learn at your own pace or
                  through live sessions.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_two"><FontAwesomeIcon icon={faMedal} /></span>
                <h6>Exclusive Membership Program</h6>
                <p>Access premium benefits with our membership program, including access to high-quality resources,
                  prioritized teaching sessions, and exclusive mentorship opportunities.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_three"><FontAwesomeIcon icon={faRobot} /></span>
                <h6>AI-Powered Learning Assistance</h6>
                <p>Our AI tools simplify complex materials and assessments, providing personalized support to help you
                  master skills more efficiently.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_four"><FontAwesomeIcon icon={faDollarSign} /></span>
                <h6>Revenue and Recognition</h6>
                <p>Earn money for sharing your expertise while building your personal brand as a leading educator in your
                  field.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_five"><FontAwesomeIcon icon={faTools} /></span>
                <h6>Supportive Platform Tools</h6>
                <p>Access a robust platform with tools to create engaging content, manage students, and track progress
                  effortlessly.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_six"><FontAwesomeIcon icon={faUsers} /></span>
                <h6>Global Audience Reach</h6>
                <p>Share your knowledge with students from all over the world, expanding your influence and professional
                  reach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )

}