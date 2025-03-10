import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import bg from "./assets/bg1.jpg"; // Ensure this path is correct

const Resetpassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://password-reset-flow-server-0ne8.onrender.com/resetpassword/${id}/${token}`,
        { password }
      )
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="position-relative vh-100 vw-100 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)", // Apply blur to the background image itself
          zIndex: 0,
        }}
      ></div>

      {/* Foreground Content */}
      <div
        className="position-relative d-flex justify-content-center align-items-center w-100 h-100"
        style={{ zIndex: 1 }}
      >
        <form
          className="w-100"
          style={{ maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          <div
            className="card p-4 shadow-lg rounded-4"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)", // Glassmorphism effect
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div className="card-body">
              <h3 className="card-title mb-4 text-center fw-bold">
                Reset Password
              </h3>
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-dark">
                  New Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter new password..."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-success btn-lg rounded-4"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
