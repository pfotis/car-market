import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Card = ({brand, model, stateAU, images, _id }) => {
  console.log(brand, model, stateAU, images, _id);
  let id = _id;
  return (
  
    <div className="card marketCard" style={{width: '300px'}}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner">
          {images.map(image => (
            <div className="carousel-item active">
              <img src={image} className="d-block w-100 marketImage" alt={image}/>
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
        <h6 className="card-title"><strong>model: </strong>{model}</h6>
        <h6 className="card-title"><strong>state: </strong>{stateAU}</h6>
        <Link to={"/carsinmarket/" + id } className="btn btn-primary">
          <strong>more info</strong>
        </Link>
      </div>
    </div>
  );
};

export default Card;
