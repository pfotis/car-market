import React from "react";

function Carousel() {
  
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/carousel/bmw.jpg" className="d-block w-100" alt="bmw"/>
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/volvo.jpg" className="d-block w-100" alt="volvo"/>
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/kia.jpg" className="d-block w-100" alt="kia"/>
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/lexus.jpg" className="d-block w-100" alt="lexus"/>
          </div>
          <div className="carousel-item">
            <img src="./img/carousel/mercedes.jpg" className="d-block w-100" alt="mercedes"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}

export default Carousel;
