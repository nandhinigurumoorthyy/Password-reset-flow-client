import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  console.log(email);
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    axios
      .post("http://localhost:10000/forgotpassword", { email })
      .then((res) => {
        alert("Password reset link sent to your email");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        // Navigate to the error page and pass the error message
        navigate("/error", {
          state: {
            message: "Please check your credentials...",
            details: error.message,
          },
        });
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="card rounded p-3 shadow-lg">
          <div className="card-body">
            <h3 className="card-title mb-3 text-center">Forgot Password</h3>
            <h6 className="mb-3 text-secondary">Verify email address</h6>
            <div className="mb-4">
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
              />
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-success" type="submit">
                continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
