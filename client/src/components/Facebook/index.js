import axios from 'axios';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {

    
    const responseFacebook = (response) => {
        const nameSplit = response.name.split(" ");
        const user = {
            firstname: nameSplit[0],
            lastname: nameSplit[1],
            email: response.email,
            facebookId: response.id,
            password: "facebook"
        };
        axios.post("/api/users/facebook-login", user)
            .then((res) => {
                console.log("facebook sign up response", res);
                window.location = "/home";
            });
    }

    return (
        <div>
            <FacebookLogin
                appId="150190106992886"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    )

}

export default Facebook;