import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import { Input, FormBtn, FormInput } from "../components/Form";
import "./style.css";


function Sell() {

    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadUsers()
      }, [])

    function loadUsers() {
        API.getUsers()
            .then(res => 
            setUsers(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
          API.saveCar({
            firstname: formObject.firstname,
            lastname: formObject.lastname,
            email: formObject.email,
            password: formObject.password
          })
            .then(res => loadUsers())
            .catch(err => console.log(err));
        }
      };

    return (
        <form className="space"> 
            <Col size="md-6 sm-12">
                <h3>Form</h3>
                <br/>
                <br/>
                <div className="form-group">
                    <label for="bodyType">Body Type</label>
                    <select className="form-control" name="bodyType" >
                        <option>SUV</option>
                        <option>Sedan</option>
                        <option>Wagon</option>
                        <option>Hatch</option>
                        <option>Ute</option>
                        <option>Convertible</option>
                    </select>
                </div>
                <Row>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Brand"
                            name="brand"
                            type="text"
                            placeholder="example: BMW"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Model"
                            name="model"
                            type="text"
                            placeholder="example: X4"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Date of Purchase"
                            name="dateOfPurchase"
                            type="date"
                            placeholder=""
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Price"
                            name="price"
                            type="text"
                            placeholder="example: 20000"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Kilometers"
                            name="kilometers"
                            type="text"
                            placeholder="example: 179000"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <FormInput
                            label="Postcode"
                            name="postcode"
                            type="text"
                            placeholder="example: 3204"
                            handleInputChange={handleInputChange}
                        />
                    </Col>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                        <label for="stateAU">State</label>
                        <select className="form-control" name="stateAU" >
                            <option>NSW</option>
                            <option>VIC</option>
                            <option>QLD</option>
                            <option>SA</option>
                            <option>TAS</option>
                            <option>ACT</option>
                            <option>NT</option>
                        </select>
                </div>
                    </Col>
                </Row>
                <FormBtn
                    disabled={!(formObject.email && formObject.password && formObject.lastname && formObject.firstname)}
                    onClick={handleFormSubmit}
                >
                    Submit
                </FormBtn>
            </Col>
        </form>
    );
  }


export default Sell;