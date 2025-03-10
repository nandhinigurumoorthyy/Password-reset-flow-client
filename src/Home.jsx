import React from "react";
import { Link } from "react-router-dom";
import { GiDirectionSign } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./assets/bg.jpg"
import "./App.css"
import { HiH3 } from "react-icons/hi2";

const Home = () => {
  return (
<><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  </ol>
  <div class="carousel-inner">
<div className="carousel-item active">
  <img src={bg} alt="Background" className="w-100" />
  <div className="carousel-caption d-block d-md-block d-flex pb-0">
    <div className=" text-responsive">
      <h3 className="fst-italic font-monospace home">
        Experience the soul of India – where history whispers and culture breathes....
      </h3>
    </div> 
    <div className="d-flex justify-content-center gap-3 mt-3">
      <Link to="/create" className="btn btn-danger btn-lg home">
        <GiDirectionSign className="me-2" />
        Sign Up
      </Link>
      <Link to="/login" className="btn btn-primary btn-lg home">
        <IoLogIn className="me-2" />
        Log In
      </Link>
      </div>
  </div>
</div></div></div>


    {/* <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <form className="d-flex gap-5 flex-column">
        <div className="text-center">
      <img src={bg} className="rounded" alt="bg"/></div>
        <div>
          <h1 className="fst-italic font-monospace">Experience the soul of India – where history whispers and culture breathes.</h1>
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
    </div> */}</>
  );
};

export default Home;
