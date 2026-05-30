import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const isValid = (val) => {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phone = /^[0-9]{10}$/;
    return email.test(val) || phone.test(val);
  };

  const handleContinue = () => {
    localStorage.setItem("signupUser", value);
    navigate("/otp");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
          className="signup-logo"
        />

        <h2>Create account</h2>

        <label>Email or mobile number</label>
        <input
          type="text"
          placeholder="Enter email or phone"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          className="signup-btn"
          disabled={!isValid(value)}
          onClick={handleContinue}
        >
          Continue
        </button>

        <p className="signup-terms">
          By continuing, you agree to our{" "}
          <a href="#">Conditions of Use</a> and{" "}
          <a href="#">Privacy Notice</a>.
        </p>

        <div className="divider">
          <span>or</span>
        </div>

        {/* Social buttons */}
        <button className="social google">
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
          Continue with Google
        </button>

        <button className="social facebook">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
          Continue with Facebook
        </button>

        <button className="social github">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
          Continue with GitHub
        </button>

        <p className="signin-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
        
        {/* 🔙 Back Button */}
        <button
          className="back-btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
