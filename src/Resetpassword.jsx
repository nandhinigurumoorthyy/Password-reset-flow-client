import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import bg from "./assets/bg1.jpg"; // Make sure this path is correct

const Resetpassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();
  console.log("password", password);

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
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(3px)",
      }}
    >
      <form
        className="w-100"
        style={{ maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <div
          className="card p-4 shadow-lg rounded-4"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <div className="card-body">
            <h3 className="card-title mb-4 text-center fw-bold">Reset Password</h3>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
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
              <button className="btn btn-success btn-lg rounded-4" type="submit">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
