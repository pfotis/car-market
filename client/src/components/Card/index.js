import React from 'react';
import { Link } from "react-router-dom";

const Card = ({brand,}) => {
  return (
    <div className="card" style="width: 18rem;">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* {images.map(image => (
            <div className="carousel-item active">
              <img src={image} className="d-block w-100" alt={image}/>
            </div>
          ))} */}
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
        <h6 className="fas fa-car-side">model: </h6>
        <h6 className="card-title">state:</h6>
        {/* <Link to={"/cars/" + _id} className="btn btn-primary">
          <strong>more info</strong>
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
