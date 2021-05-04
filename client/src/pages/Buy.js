import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


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
          <Jumbotron>
            <h1>Buy under contstaction !</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    );
  }


export default Buy;