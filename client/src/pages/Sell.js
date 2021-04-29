import React, { useState, useEffect } from "react";
import { Col, Container } from "../components/Grid";
import Label from "../components/Label";

function Sell() {
  
    return (
        <Container fluid>
            <Col size="lg-5 sm-12">
                <form>
                    <br/>
                    <br/>
                    <Label>Brand</Label>
                    <Label>Model</Label>
                    <Label>Price</Label>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Body Type</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>SUV</option>
                        <option>Sedan</option>
                        <option>Wagon</option>
                        <option>Hatch</option>
                        <option>Ute</option>
                        <option>Convertible</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Label>Year of Purchase</Label>
                    <Label>kilometers</Label>
                    <br/>
                    <br/>
                </form>
            </Col>
      </Container>
    );
  }


export default Sell;