import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import bg from "./assets/bg1.jpg"; // Background Image
import "./App.css"; // Import your common CSS (for glass effect etc.)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://password-reset-flow-server-0ne8.onrender.com/login", { email, password })
      .then((res) => {
        if (res.data && res.data.user) {
          localStorage.setItem("name", res.data.user.name);
          navigate("/page");
        } else {
          console.error("Unexpected server response:", res.data);
          navigate("/error", {
            state: { message: "Unexpected server response. Please try again later." },
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        navigate("/error", {
          state: {
            message: "Login failed! Please check your credentials.",
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
        <div className="text-center mb-2">
          <h3 className="card-title">
            <IoLogIn className="me-2" />
            Log In
          </h3>
          
        </div>

        <div className="mb-3">
        <h6 className="text-secondary text-center mb-1">Access your account</h6>
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
          <button className="btn btn-primary rounded-4" type="submit">
            Log In
          </button>
        </div>

        <div className="mb-2">
          <Link to="/forgotpassword" className="d-block mb-3 text-white">
            Forgot password?
          </Link>
          <h6 className="mb-2 text-center">Don't have an account?</h6>
          <Link to="/create" className="btn btn-danger w-100 rounded-4">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
