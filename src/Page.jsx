import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jaipur from "./assets/Jaipur.jpg"
import mahabalipuram from "./assets/mahabalipuram.jpg"
import mysore from "./assets/Mysore.jpg"
import tajmahal from "./assets/tajmahal.jpg"
import UP from "./assets/UP.jpg"
import "./App.css"

const Page = () => {
  const username = localStorage.getItem("name");
  return (

    <div className="slider-area font-monospace">
      <div id="carouselExampleIndicators" class="carousel slide custom-carousel " data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="overlay"></div>
            <img src={mahabalipuram} alt="MAHABALIPURAM" />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style="animation-delay:1s">Mamallapuram, Tamilnadu</h5>
              <p className="animated fadeInDown" style="animation-delay:2s">Mamallapuram, is a historic coastal town in Tamil Nadu, India, renowned for its ancient rock-cut temples and intricate sculptures, including the famous Arjuna's Penance.</p>
            </div>
          </div>

          <div class="carousel-item">
          <div className="overlay"></div>
            <img src={jaipur} alt="JAIPUR" />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style="animation-delay:1s">Jaipur, Rajasthan</h5>
              <p className="animated fadeInDown" style="animation-delay:2s">Jaipur is the cultural hub of India boasting magnificent architecture, a rich cultural heritage and delicious cuisine. It is home to numerous beautiful forts and palaces, ancient temples and lovely baolis.</p>
            </div>
          </div>

          <div class="carousel-item">
          <div className="overlay"></div>
            <img src={mysore} alt="mysore" />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style="animation-delay:1s">Mysore, Karnataka</h5>
              <p className="animated fadeInDown" style="animation-delay:2s">Home to lovely museums, temples and palaces, Mysore is undoubtedly the cultural capital of Karnataka and has been ruled by several brave kings in the past.</p>
            </div>
          </div>

          <div class="carousel-item">
          <div className="overlay"></div>
            <img src={tajmahal} alt="tajmahal" />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style="animation-delay:1s">Agra, India</h5>
              <p className="animated fadeInDown" style="animation-delay:2s">Agra, rich in cultural heritage, is renowned for its Mughal architecture, including the Taj Mahal, and hosts vibrant festivals like Diwali, Holi, and the Taj Mahotsav, celebrating art, culture, and traditions.</p>
            </div>
          </div>

          <div class="carousel-item">
          <div className="overlay"></div>
            <img src={UP} alt="UP" />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="animated fadeInUp" style="animation-delay:1s">Lucknow, Uttar Pradesh</h5>
              <p className="animated fadeInDown" style="animation-delay:2s">Lucknow, Uttar Pradesh, is a city steeped in history, known for its magnificent landmarks like the Bara Imambara, its classical dance forms, and the renowned Lucknawi hospitality and cuisine.</p>
            </div>
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

  );
};

export default Page;
