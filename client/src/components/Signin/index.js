import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
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
            <Col size="lg-6 md-6 sm-12">
                <Facebook/>
            </Col>
            <Col size="lg-6 md-6 sm-12">
            <form onSubmit={handleSubmit}>
                <h3>Log in</h3>
                <br/>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value.trim())} 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                Create account  
                <Link
                    to="/signup"
                >
                    Login
                </Link>
            </p>
            </form>
        </Col>
        
        </div>
        
    );
}

export default Login;