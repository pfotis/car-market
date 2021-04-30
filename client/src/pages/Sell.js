import React, { useState, useEffect } from "react";
import { Col, Container } from "../components/Grid";
import { FormInput } from "../components/Form";
import listInputs from "../sellFormInput.json";
import { Component } from "react";

class Sell extends Component {

    state = {
        listInputs
      };
      
    // const [cars, setUsers] = useState([])
    // const [formObject, setFormObject] = useState({})

    handleInputChange = (event) => {
        const { name, value } = event.target;
        // setFormObject({...formObject, [name]: value})
    };
    render() {
        return (
            <Container fluid>
                <Col size="md-5 sm-12">
                    <form>
                        <br/>
                        <br/>
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
                        {this.state.listInputs.map(listInput => (
                            <FormInput
                                handleInputChange={this.handleInputChange}
                                name={listInput.name}
                                type={listInput.type}
                                label={listInput.label}
                                placeholder={listInput.placeholder}
                            />
                        ))}
                        <br/>
                        <br/>
                    </form>
                </Col>
        </Container>
        );
    }
  }


export default Sell;