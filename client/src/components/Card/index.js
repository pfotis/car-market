import React from 'react';
import { Link } from "react-router-dom";

const Card = ({brand, model, stateAU, images }) => {
  console.log(brand, model, stateAU);
  return (
  
    <div className="card" style={{width: '300px'}}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map(image => (
            <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt={image}/>
          </div>
          ))}
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
      <div className="card-body">
        <h3 className="card-title">{brand}</h3>
        <h6 className="fas fa-car-side">{model}</h6>
        <h6 className="card-title">{stateAU}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;
