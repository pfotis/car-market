import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import { FormBtn, FormInput } from "../components/Form";
import "./style.css";

require('dotenv').config();


function Sell() {

    const [count, dispatch] = useReducer((state, action) => {
        if (action === "subtract") {
            return state - 1;
          } else {
            return state;
          }
      }, 5);
    
    const [formObject, setFormObject] = useState({
        stateAU:"NSW"
    })
    const [loading,setLoading] = useState(false)
    const [image,setImage] = useState([])

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset', 'carmarket')
        setLoading(true)

        const res = await fetch(`https://api.cloudinary.com/v1_1/dtb5q972s/image/upload`, 
        {
            method:'POST',
            body:data
        })
        const file = await res.json();

        console.log(file);
        const images = [...image, file.secure_url]
        setImage(images)
        setLoading(false)
    };

    function handleInputChange(event) {
        const { name, value } = event.target;

        console.log(name , value);
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
          API.saveCar({
            bodyType: formObject.bodyType,
            brand: formObject.brand,
            model: formObject.model,
            dateOfPurchase: formObject.dateOfPurchase,
            price: formObject.price,
            kilometers: formObject.kilometers,
            email: formObject.email,
            postcode: formObject.postcode,
            stateAU: formObject.stateAU,
            images: image
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
      };
    
      

    return (
        <form className="space"> 
            <Col size="md-6 sm-12">
                <h3>Form</h3>
                <br/>
                <div className="form-group">
                    <label for="bodyType">Body Type</label>
                    <select className="form-control" name="bodyType" 
                        onChange={handleInputChange}
                    >
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
                        <select className="form-control" name="stateAU" 
                            onChange={handleInputChange}
                        >
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
                <div className="imageURL">
                    <p>Upload Image</p>
                    <p>You could upload {count} images</p>
                    <input
                        type="file"
                        name="imageUrl"
                        placeholder="Upload an Image"
                        onChange={uploadImage}
                        handleInputChange={handleInputChange}
                        onClick={() => dispatch("subtract")}
                        disabled={count == 0}
                    />
                    {
                        loading?(
                            <h3>loading...</h3>
                        ):(
                            <img src={image} style={{width:'100px'}}/>
                        )
                    }

                </div>
                <br/>
                <br/>
                <FormBtn
                    onClick={handleFormSubmit}
                >
                    Submit
                </FormBtn>
            </Col>
        </form>
    );
  }


export default Sell;