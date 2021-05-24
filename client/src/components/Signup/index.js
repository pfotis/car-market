import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import components
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Facebook from "../Facebook";
//import css
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
        axios.post("/api/users/signup", user).then((res) => {
          window.location = "/signin";
        });
      };

    return (
        <Row>
            <Col size="lg-6 md-6 sm-12">
                <div className="social"> 
                    <Facebook/>
                </div>
            </Col>
            <Col size="lg-6 md-6 sm-12">
                <form className="signup"  onSubmit={handleFormSubmit}> 
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
                </form>
            </Col>
        </Row>
    );
}

export default Signup;
