import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./style.css";


function Detail(props) {
  const [car, setCar] = useState({})

  // When this component mounts, grab the car with the _id of props.match.params.id
  // e.g. localhost:3000/carsinmarket/599dcb67f0f16317844583fc
  const {id} = useParams()
  console.log(id);
  useEffect(() => {
    API.getCar(id)
      .then(res => {setCar(res.data);
      console.log(res.data);})
      .catch(err => console.log(err));
  }, [])

  console.log(car);

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
            {/* <h1>About under constraction !</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron> */}
        </Col>
        <Col size="md-6 sm-12">
          <div className="details">
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/carsinmarket">← Back</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;