import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import components
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import Image from "../components/Image";
// import API
import API from "../utils/API";
// import css
import "./style.css";


function Detail(props) {
  const [car, setCar] = useState({})

  // When this component mounts, grab the car with the _id of props.match.params.id
  // e.g. localhost:3000/carsinmarket/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getCar(id)
      .then(res => { 
        console.log(res.data.images[0]);
        setCar(res.data);
      })
      .catch(err => console.log(err));
  }, [id])

  return (
    <Container fluid>
      <Row>
      <br/>
          <Link to="/carsinmarket">← Back</Link>
          <br/>
          <br/>
      </Row>
      <Row>
        <Col size=" lg-6 md-6 sm-12">
          <Image
            images = {car.images}
          />
        </Col>
        <Col size="lg-6 md-6 sm-12">
          <div className="font">
            <h1><strong>Brand : </strong>{car.brand}</h1>
            <br/>
            <h4><strong>Model : </strong>{car.model}</h4>
            <hr/>
            <h6><strong>Body Type : </strong>{car.bodyType}</h6>
            <h6><strong>Date of Purchase : </strong>{car.dateOfPurchase}</h6>
            <h6><strong>Kilometers : </strong>{car.kilometers} km</h6>
            <h6><strong>Price : </strong>$ {car.price}</h6>
            <hr/>
            <h6><strong>email : </strong>{car.email}</h6>
            <h6><strong>State : </strong>{car.stateAU}</h6>
            <h6><strong>postcode : </strong>{car.postcode}</h6>
          
            <br/>
            <br/>
            <form action="mailto:" method="post" enctype="text/plain">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="your name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Write a message"
                    rows="8"
                  ></textarea>
                </div>
                <FormBtn>Submit</FormBtn>
                <br/>
                <br/>
                <br/>
                <Link to="/carsinmarket">← Back</Link>
                <br/>
                <br/>
              </form>
            </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;