import "./index.css";
import { useState } from "react";

const message = ["Learn React", "apply for jobs", "tell your incomes"];
function App() {
  const [step, setStep] = useState(1);
  const stepsClick = () => {
    step < 3 ? setStep(step + 1) : setStep(step);
  };
  const stepsPrevious = () => {
    step > 1 ? setStep(step - 1) : setStep(step);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step: {step} {message[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={stepsPrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={stepsClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
