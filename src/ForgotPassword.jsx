import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import bg from "./assets/bg1.jpg"; // Import background image
import "./App.css"; // Common CSS file for glassmorphism effect

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    axios
      .post("https://password-reset-flow-server-0ne8.onrender.com/forgotpassword", { email })
      .then((res) => {
        alert("Password reset link sent to your email");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        navigate("/error", {
          state: {
            message: "Please check your credentials...",
            details: error.message,
          },
        });
      });
  };

  return (
    <div
      className="signup-container d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <form className="form-box p-3" onSubmit={handleSubmit}>
        <div className="text-center mb-3">
          <h3 className="card-title">Forgot Password</h3>
         
        </div>

        <div className="mb-4">
        <h6 className="text-secondary text-center">Verify email address</h6>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="d-grid mb-3">
          <button className="btn btn-success rounded-4" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
