import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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
         {
           password,
         }
       )
       .then((res) => {
         if (res.data.status === "Success") {
           navigate("/login");
         }
       })
       .catch((err) => console.log(err));
   };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="card rounded p-3 shadow-lg">
          <div className="card-body">
            <h3 className="card-title mb-4 text-center">Reset Password</h3>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="..........."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-success" type="submit">
                update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
