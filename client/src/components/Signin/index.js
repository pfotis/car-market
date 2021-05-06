import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Facebook from "../Facebook";
import "./style.css";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {email, password}        
        axios.post("/api/login", user)
        .then(res => {
            console.log(res);
            window.location = "/home";
        })
    }
    
    return (
        <div className="signin">
            <Row>
                <Col size="lg-6 md-6 sm-12">
                    <div className="social"> 
                        <Facebook/>
                    </div>
                </Col>
                <Col size="lg-5 md-6 sm-12">
                    <form onSubmit={handleSubmit}>
                        <h3>Log in</h3>
                        <br/>
                        <div className="form-group">
                            <label>Email</label>
                            <Input
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value.trim())} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Input
                                type="password" 
                                className="form-control" 
                                placeholder="Enter password" 
                                onChange={(e) => setPassword(e.target.value.trim())}
                            />
                        </div>
                        <FormBtn
                            onClick={handleSubmit}
                        >
                            Sign In
                        </FormBtn>
                        <p className="forgot-password text-right">
                            Create account  
                            <Link
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;