import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import "./style.css";
 
function Signup() {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = {
          firstname,
          lastname,
          email,
          password
        };
        console.log(user);
        axios.post("/api/signup", user).then((res) => {
          window.location = "/signin";
        });
      };

    return (
        <form className="signup"  onSubmit={handleFormSubmit}> 
            <Col size="lg-5 md-6 sm-12">
                <h3>Register</h3>
                <br/>
                <Row>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>First name</label>
                            <Input 
                                onChange={(e) => setFirstname(e.target.value)}
                                name="firstname"
                                placeholder="First name (required)"
                            />
                        </div>
                    </Col>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>Last name</label>
                            <Input 
                                onChange={(e) => setLastname(e.target.value)}
                                name="lastname"
                                placeholder="Last name (required)"
                            />
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Email</label>
                    <Input 
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Enter email (required)"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input 
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder="Enter password (required)"
                    />
                </div>
                <FormBtn
                    onClick={handleFormSubmit}
                >
                    Sign Up
                </FormBtn>
                <p className="forgot-password text-right">
                    Already registered
                    <Link
                        to="/signin"
                    >
                        Sign In
                    </Link>
                </p>
            </Col>
        </form>
    );
}

export default Signup;
