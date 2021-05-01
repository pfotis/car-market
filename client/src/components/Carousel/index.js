import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" calssName="carousel slide" data-bs-ride="carousel">
        <div calssName="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" calssName="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
        <div calssName="carousel-inner">
          <div calssName="carousel-item active">
            <img src="./img/bmw.jpg" calssName="d-block w-100" alt="bmw"/>
          </div>
          <div calssName="carousel-item">
            <img src="./img/volvo.jpg" calssName="d-block w-100" alt="volvo"/>
          </div>
          <div calssName="carousel-item">
            <img src="./img/kia.jpg" calssName="d-block w-100" alt="kia"/>
          </div>
          <div calssName="carousel-item">
            <img src="./img/lexus.jpg" calssName="d-block w-100" alt="lexus"/>
          </div>
          <div calssName="carousel-item">
            <img src="./img/mercedes.jpg" calssName="d-block w-100" alt="mercedes"/>
          </div>
        </div>
        <button calssName="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span calssName="carousel-control-prev-icon" aria-hidden="true"></span>
          <span calssName="visually-hidden">Previous</span>
        </button>
        <button calssName="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span calssName="carousel-control-next-icon" aria-hidden="true"></span>
          <span calssName="visually-hidden">Next</span>
        </button>
      </div>
  );
}

export default Carousel;
