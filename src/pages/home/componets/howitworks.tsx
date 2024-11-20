import React, { useState } from "react";
import "../../../assets/howitworks.css"; // Ensure the correct path
import "../../../assets/howitworks.jsx"; // Ensure the correct path
import { DotLottiePlayer } from "@dotlottie/react-player";

// Define types for the steps
interface StepDetails {
  title: string;
  description: string;
  imgComponent: JSX.Element; // Now all steps will use imgComponent
}

interface StepDetailsMap {
  [key: number]: StepDetails;
}

export function HowItWorks() {
  const [step, setStep] = useState<number>(1); // Initialize state with the default step as 1

  // Define the stepDetails with type
  const stepDetails: StepDetailsMap = {
    1: {
      title: "Create Account",
      description: "Sign up and log in to your personalized student dashboard to begin your learning journey. Access a variety of tools, membership program, track your progress, and explore resources tailored to enhance your educational experience.",
      imgComponent: (
        <DotLottiePlayer
          src="https://lottie.host/f33444f0-ad04-4935-bc43-0e1642cec4da/AdFrqSJiR7.json"
          background="transparent"
          speed={0.3}
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          loop
          autoplay
        />
      ),
    },
    2: {
      title: "Book Session",
      description: "Locate the explore section where a variety of courses are listed, each designed to meet diverse learning needs. Browse through detailed course descriptions, categories, and instructor profiles to find the perfect match for your goals. Once decided, successfully book a session for your desired course and take the first step toward enhancing your knowledge and skills.",
      imgComponent: (
        <DotLottiePlayer
          src="https://lottie.host/5573ffc3-31c4-4125-aa5b-b3a3d3160dd3/VTi69oLYNH.json"
          background="transparent"
          speed={0.5}
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          loop
          autoplay
        />
      ),
    },
    3: {
      title: "Learning Process",
      description: "Participate in the course as soon as it begins. Join engaging live webinar sessions to interact with instructors and peers in real time, or access comprehensive materials designed for self-paced learning. Whether you prefer live discussions or independent study, follow structured lessons, complete assignments, and master the skills required for success effectively and at your convenience.",
      imgComponent: (
        <DotLottiePlayer
          src="https://lottie.host/b1b9567d-223a-4ae9-9b90-16bc82979844/HGXEalZcxe.json"
          background="transparent"
          speed={0.5}
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          loop
          autoplay
        />
      ),
    },
    4: {
      title: "Skill Application",
      description: "After successfully completing the course, apply your knowledge through practical, real-world scenarios tailored to your learning. Engage in guided projects, detailed tests, and MCQ assessments designed to reinforce key concepts. Tackle problem-solving challenges that simulate industry standards, receive constructive feedback, and gain the confidence to excel in professional and personal applications of your skills.",
      imgComponent: (
        <DotLottiePlayer
          src="https://lottie.host/8358a291-faa3-426e-b256-b69ebf8c8d29/nu3Z2XIuov.json"
          background="transparent"
          speed={0.5}
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          loop
          autoplay
        />
      ),
    },
  };

  const handleStepClick = (stepNum: number): void => {
    setStep(stepNum);
  };

  const { title, description } = stepDetails[step];

  return (
    <div className="how-it-works" style={{ marginBottom: '30px' }}>
      <h1>How it Works</h1>
      <div className="containerx">
        
        <div className="step" onClick={() => handleStepClick(1)}>
          {stepDetails[1].imgComponent}
          <div className="overlay">Create Account</div>
        </div>
        <span className="arrow">&#8594;</span>

        
        <div className="step" onClick={() => handleStepClick(2)}>
          {stepDetails[2].imgComponent}
          <div className="overlay">Book Session</div>
        </div>
        <span className="arrow">&#8594;</span>

        
        <div className="step" onClick={() => handleStepClick(3)}>
          {stepDetails[3].imgComponent}
          <div className="overlay">Learning Process</div>
        </div>
        <span className="arrow">&#8594;</span>

       
        <div className="step" onClick={() => handleStepClick(4)}>
          {stepDetails[4].imgComponent}
          <div className="overlay">Skill Application</div>
        </div>
      </div>

      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        
      </div>
    </div>
    
  );
}
