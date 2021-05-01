import React from "react";

function Carousel() {
    return (
        // <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //     <ol className="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        //     </ol>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img className="d-block w-100" src="./img/bmw.jpg" alt="First slide"/>
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="./img/volvo.jpg" alt="Second slide"/>
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="./img/kia.jpg" alt="Third slide"/>
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="./img/lexus.jpg" alt="Third slide"/>
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="./img/mercedes.jpg" alt="Third slide"/>
        //         </div>
            // </div>
        //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //     </a>
        // </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./img/bmw.jpg" class="d-block w-100" alt="bmw"/>
          </div>
          <div class="carousel-item">
            <img src="./img/volvo.jpg" class="d-block w-100" alt="volvo"/>
          </div>
          <div class="carousel-item">
            <img src="./img/kia.jpg" class="d-block w-100" alt="kia"/>
          </div>
          <div class="carousel-item">
            <img src="./img/lexus.jpg" class="d-block w-100" alt="lexus"/>
          </div>
          <div class="carousel-item">
            <img src="./img/mercedes.jpg" class="d-block w-100" alt="mercedes"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  );
}

export default Carousel;
