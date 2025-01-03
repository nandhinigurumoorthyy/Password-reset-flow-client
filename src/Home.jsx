import React from "react";
import { Link } from "react-router-dom";
import { GiDirectionSign } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <form className="d-flex gap-5 flex-column">
        <div>
          <h1 className="fst-italic font-monospace">Hello and Welcome !!!!!</h1>
        </div>
        <div className="d-flex gap-5 justify-content-center align-items-center">
          <Link to="/create" type="submit" className="btn btn-danger btn-lg">
            <span>
              <GiDirectionSign />
            </span>{" "}
            SignUp
          </Link>
          <Link to="/login" type="submit" className="btn btn-primary btn-lg">
            <span>
              <IoLogIn />
            </span>{" "}
            LogIn
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
