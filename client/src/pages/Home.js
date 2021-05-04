import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import OurFeature from "../components/Ourfeature";
import Card from "../components/Card";

function Home() {
  
    return (
      <Container fluid>
        <Col size="md-12">
          <Card/>
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
