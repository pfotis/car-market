import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
import "./style.css";

function Login() {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    
    return (
        <form className="signin">
            <Col size="md-6 sm-12">
                <h3>Log in</h3>
                <br/>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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
                    sign up
                </Link>
            </p>
            </Col>
        </form>
    );
}

export default Login;