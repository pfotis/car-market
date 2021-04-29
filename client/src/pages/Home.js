import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import OurFeature from "../components/Ourfeature";

function Home() {
  
    return (
      <Container fluid>
        <Row>
          <Carousel/>
        </Row>
        <Row>
          <OurFeature />
        </Row>
      </Container>
    );
  }


export default Home;
