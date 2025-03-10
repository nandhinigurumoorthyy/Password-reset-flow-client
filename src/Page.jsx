import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  
import jaipur from "./assets/Jaipur.jpg";
import mahabalipuram from "./assets/mahabalipuram.jpg";
import mysore from "./assets/Mysore.jpg";
import tajmahal from "./assets/tajmahal.jpg";
import UP from "./assets/UP.jpg";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const username = localStorage.getItem("name");
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <>
      <div className="slider-area font-monospace text-dark">
        <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
          
          {/* Logout Button */}
          <div className="logout-button">
            <button onClick={handleLogout} type="button" className="btn btn-light">
              LogOut
            </button>
          </div>

          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
          </ol>

          <div className="carousel-inner">
            {/* Carousel Items */}
            {[ 
              { img: mahabalipuram, title: "Mamallapuram, Tamilnadu", desc: "A historic coastal town renowned for ancient rock-cut temples and sculptures." },
              { img: jaipur, title: "Jaipur, Rajasthan", desc: "The cultural hub of India, home to magnificent architecture and rich heritage." },
              { img: mysore, title: "Mysore, Karnataka", desc: "Cultural capital of Karnataka with lovely museums, temples, and palaces." },
              { img: tajmahal, title: "Agra, India", desc: "Famous for the Taj Mahal and rich Mughal heritage." },
              { img: UP, title: "Lucknow, Uttar Pradesh", desc: "Known for its historical landmarks, classical dance forms, and hospitality." }
            ].map((place, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="overlay"></div>
                <img src={place.img} alt={place.title} className="d-block w-100 img-fluid" />
                
                {/* FIX: Ensure text shows on all screen sizes */}
                <div className="carousel-caption d-block d-md-block text-responsive">
                  <h5 className="animated fadeInUp">{place.title}</h5>
                  <p className="animated fadeInDown">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>   </>
  );
};


export default Page;
