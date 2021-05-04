import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";


function Buy() {
  const [cars, setCars] = useState([])
  
  useEffect(() => {
      loadCars()
  }, [])

  function loadCars() {
    API.getCars()
      .then(res =>{
        setCars(res.data)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

    return (
      <Container fluid>
      <Row>
        <Col size="md-12">
          {cars.map(car => (
             <Card
              brand = {car.brand}
              model = {car.model}
              stateAU = {car.stateAU}
              // _id = {car._id}
              images = {car.images}
              key = {car._id}
            />
          //   <div>
          //     {car.brand},{car.model},
          //      {car.stateAU},
          //      {car._id},
          //      {car.images},
               
          //  </div>
          ))}
        </Col>
      </Row>
    </Container>
    );
  }


export default Buy;