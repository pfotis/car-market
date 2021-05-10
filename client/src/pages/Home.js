import React from "react";
// import components
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import OurFeature from "../components/Ourfeature";

function Home() {
  
    return (
      <Container fluid>
        <Col size="md-12">
          <Row>
            <Carousel/>
          </Row>
          <Row>
            <OurFeature />
          </Row>
        </Col>
      </Container>
    );
  }


export default Home;
