import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import "./style.css";
 
function Signup() {

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
        <form className="signup"> 
            <Col size="md-6 sm-12">
                <h3>Register</h3>
                <br/>
                <Row>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>First name</label>
                            <Input 
                                onChange={handleInputChange}
                                name="firstname"
                                placeholder="First name (required)"
                            />
                        </div>
                    </Col>
                    <Col size="md-6 sm-12">
                        <div className="form-group">
                            <label>Last name</label>
                            <Input 
                                onChange={handleInputChange}
                                name="lastname"
                                placeholder="Last name (required)"
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
                    <input type="password" className="form-control" placeholder="Enter password (required)" />
                </div>

                <FormBtn
                    // disabled={!(formObject.email && formObject.password && formObject.lastname && formObject.firstname)}
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

export default Signup;
