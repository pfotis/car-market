import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
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
          API.saveUser({
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
                <Row>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>Brand</label>
                            <Input 
                                onChange={handleInputChange}
                                name="brand"
                                placeholder="example : BMW"
                            />
                        </div>
                    </Col>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>Model</label>
                            <Input 
                                onChange={handleInputChange}
                                name="model"
                                placeholder="example : X4"
                            />
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Email</label>
                    <Input 
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Enter email (required)"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input 
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Enter password (required)"
                    />
                </div>

                <FormBtn
                    disabled={!(formObject.email && formObject.password && formObject.lastname && formObject.firstname)}
                    onClick={handleFormSubmit}
                >
                    Register
                </FormBtn>
                <p className="forgot-password text-right">
                    Already registered  
                    <Link
                        to="/signin"
                    >
                        sign in
                    </Link>
                </p>
            </Col>
        </form>
    );
  }


export default Sell;