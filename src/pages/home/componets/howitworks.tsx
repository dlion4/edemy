import React, { useState } from 'react';
import "../../../assets/howitworks.css"; // Ensure the correct path
import "../../../assets/howitworks.jsx"; // Ensure the correct path

// Define types for the steps
interface StepDetails {
  title: string;
  description: string;
  imgSrc: string;
}

interface StepDetailsMap {
  [key: number]: StepDetails;
}

export function HowItWorks() {
  const [step, setStep] = useState<number>(1); // Initialize state with the default step as 1

  // Define the stepDetails with type
  const stepDetails: StepDetailsMap = {
    1: {
      title: "Step 1: Conception",
      description: "This step involves designing and planning the entire process to ensure efficiency and accuracy.",
      imgSrc: "https://github.com/berru-g/berru-g/blob/main/img/hardware.png?raw=true",
    },
    2: {
      title: "Step 2: Programmation",
      description: "During this step, programming and coding take place to build the software or system.",
      imgSrc: "https://github.com/berru-g/berru-g/blob/main/img/web-development.png?raw=true",
    },
    3: {
      title: "Step 3: Fabrication",
      description: "In this phase, the physical product is manufactured or assembled based on the design.",
      imgSrc: "https://github.com/berru-g/berru-g/blob/main/img/motherboard.png?raw=true",
    },
    4: {
      title: "Step 4: Expédition",
      description: "The final product is packaged and shipped to its destination, completing the process.",
      imgSrc: "https://github.com/berru-g/berru-g/blob/main/img/ecommerce.png?raw=true",
    },
  };


  const handleStepClick = (stepNum: number): void => {
    setStep(stepNum);
  };


  const { title, description, imgSrc } = stepDetails[step];

  return (
    <div className="how-it-works">
      <h1>How it Works</h1>
      <div className="containerx">
        {/* Step 1 */}
        <div className="step" onClick={() => handleStepClick(1)}>
          <img src={stepDetails[1].imgSrc} alt="Conception" />
          <div className="overlay">Conception</div>
        </div>
        <span className="arrow">&#8594;</span>

        {/* Step 2 */}
        <div className="step" onClick={() => handleStepClick(2)}>
          <img src={stepDetails[2].imgSrc} alt="Programmation" />
          <div className="overlay">Programmation</div>
        </div>
        <span className="arrow">&#8594;</span>

        {/* Step 3 */}
        <div className="step" onClick={() => handleStepClick(3)}>
          <img src={stepDetails[3].imgSrc} alt="Fabrication" />
          <div className="overlay">Fabrication</div>
        </div>
        <span className="arrow">&#8594;</span>

        {/* Step 4 */}
        <div className="step" onClick={() => handleStepClick(4)}>
          <img src={stepDetails[4].imgSrc} alt="Expédition" />
          <div className="overlay">Expédition</div>
        </div>
      </div>

      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
