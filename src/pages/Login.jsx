import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  function validateEmailLike(val) {
    const phoneRe = /^\+?[0-9]{7,15}$/;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phoneRe.test(val) || emailRe.test(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");

    if (!validateEmailLike(email.trim())) {
      setEmailError("Enter a valid email address or mobile phone number.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Sign-in successful! Redirecting...");
    navigate(from, { replace: true });
  }

  return (
    <div className="login-page">
      <div className="login-card" role="region" aria-label="Sign-in form">


        <div className="brand">
          <div className="logo" aria-hidden="true">SHOP</div>
          <div>
            <h1>LogIn</h1>
            <p className="muted">
              Welcome back — please sign in to continue
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputMode="email"
              autoComplete="username"
              required
            />
            {emailError && (
              <div className="help error">{emailError}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <div className="muted help">
              Passwords must be at least 6 characters.
            </div>
          </div>

          <button className="signin-btn" type="submit">
            Log-In
          </button>

          <div className="row">
            <label className="remember">
              <input type="checkbox" /> Keep me signed in
            </label>
            <a className="link" href="#">Need help?</a>
          </div>

          <div className="divider" aria-hidden="true"></div>

          <a className="create-account" href="#">
            Create your account
          </a>
        </form>

        <p className="help terms">
          By continuing, you agree to the site's{" "}
          <a className="link" href="#">Conditions of Use</a> and{" "}
          <a className="link" href="#">Privacy Notice</a>.
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
