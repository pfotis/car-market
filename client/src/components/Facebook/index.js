import axios from 'axios';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {

    
    const responseFacebook = (response) => {
        window.location = "/home";
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