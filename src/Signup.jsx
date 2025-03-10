import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GiDirectionSign } from "react-icons/gi";
import "./App.css";
import bg from "./assets/bg1.jpg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://password-reset-flow-server-0ne8.onrender.com/create",
        { name, email, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("Response:", res.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        navigate("/error", {
          state: {
            message: "Signup failed! Please check your credentials.",
            details: error.message,
          },
        });
      });
  };

  return (
    <>
      <div
        className="signup-container d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <form className="form-box p-3 " onSubmit={handleSubmit}>
          <div className="text-center mb-2">
            <h3 className="card-title">
              <GiDirectionSign className="me-2" />
              SignUp
            </h3>
            
          </div>
          <div className="mb-1">
          <h6 className="text-secondary text-center mb-1">Create an account</h6>
            <label htmlFor="name" className="form-label">
              User Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="User name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-1">
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
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button className="btn btn-danger rounded-4" type="submit">
              Sign Up
            </button>
          </div>
          <div>
            <h6 className="text-center mb-1">Already have an account?</h6>
            <Link to="/login" className="btn btn-primary w-100 rounded-4">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
