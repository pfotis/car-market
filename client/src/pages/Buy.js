import React, { useState, useEffect } from "react";
// import API
import API from "../utils/API";
// import components
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";


function Buy() {
  const [cars, setCars] = useState([])
  
  useEffect(() => {
      loadCars()
  }, [])

  function loadCars() {
    API.getCars()
      .then(res => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch(err => console.log(err));
  };
  
    return (
      <Container fluid>
        <Row>
          {cars.map(car => (
            <Col size="lg-4 md-6 sm-12">
              <Card
                brand = {car.brand}
                model = {car.model}
                stateAU = {car.stateAU}
                _id = {car._id}
                images = {car.images}
                key = {car._id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }


export default Buy;