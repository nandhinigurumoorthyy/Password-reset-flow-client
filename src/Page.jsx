import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jaipur from "./assets/Jaipur.jpg";
import mahabalipuram from "./assets/mahabalipuram.jpg";
import mysore from "./assets/Mysore.jpg";
import tajmahal from "./assets/tajmahal.jpg";
import UP from "./assets/UP.jpg";
import "./App.css";

const Page = () => {
  const username = localStorage.getItem("name");
  return (
    <div className="slider-area font-monospace">
      <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay"></div>
            <img src={mahabalipuram} alt="MAHABALIPURAM" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style={{ animationDelay: "1s" }}>
                Mamallapuram, Tamilnadu
              </h5>
              <p className="animated fadeInDown" style={{ animationDelay: "2s" }}>
                Mamallapuram, is a historic coastal town in Tamil Nadu, India, renowned for its ancient rock-cut temples and intricate sculptures, including the famous Arjuna's Penance.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overlay"></div>
            <img src={jaipur} alt="JAIPUR" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style={{ animationDelay: "1s" }}>
                Jaipur, Rajasthan
              </h5>
              <p className="animated fadeInDown" style={{ animationDelay: "2s" }}>
                Jaipur is the cultural hub of India boasting magnificent architecture, a rich cultural heritage, and delicious cuisine. It is home to numerous beautiful forts and palaces, ancient temples, and lovely baolis.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overlay"></div>
            <img src={mysore} alt="MYSORE" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style={{ animationDelay: "1s" }}>
                Mysore, Karnataka
              </h5>
              <p className="animated fadeInDown" style={{ animationDelay: "2s" }}>
                Home to lovely museums, temples, and palaces, Mysore is undoubtedly the cultural capital of Karnataka and has been ruled by several brave kings in the past.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overlay"></div>
            <img src={tajmahal} alt="TAJ MAHAL" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style={{ animationDelay: "1s" }}>
                Agra, India
              </h5>
              <p className="animated fadeInDown" style={{ animationDelay: "2s" }}>
                Agra, rich in cultural heritage, is renowned for its Mughal architecture, including the Taj Mahal, and hosts vibrant festivals like Diwali, Holi, and the Taj Mahotsav, celebrating art, culture, and traditions.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="overlay"></div>
            <img src={UP} alt="LUCKNOW" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style={{ animationDelay: "1s" }}>
                Lucknow, Uttar Pradesh
              </h5>
              <p className="animated fadeInDown" style={{ animationDelay: "2s" }}>
                Lucknow, Uttar Pradesh, is a city steeped in history, known for its magnificent landmarks like the Bara Imambara, its classical dance forms, and the renowned Lucknawi hospitality and cuisine.
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default Page;
