import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col } from "../Grid";
import { Input, FormBtn } from "../Form";
 
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
        <form>
            <Col size="md-6">
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <Input 
                        onChange={handleInputChange}
                        name="firstname"
                        placeholder="First name (required)"
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    {/* <input type="text" className="form-control" placeholder="Last name" /> */}
                    <Input 
                        onChange={handleInputChange}
                        name="lastname"
                        placeholder="Last name (required)"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    {/* <input type="email" className="form-control" placeholder="Enter email" /> */}
                    <Input 
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Enter email (required)"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    {/* <input type="password" className="form-control" placeholder="Enter password" /> */}
                    <Input 
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Enter password (required)"
                    />
                </div>

                {/* <button type="submit" className="btn btn-dark btn-block">Register</button> */}
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

export default Signup;
