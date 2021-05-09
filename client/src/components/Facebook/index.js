import axios from 'axios';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
    
    const responseFacebook = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "http//localhost:3000/api/faceebooklogin",
            data: {accessToken: response.accessToken, userID: response.userID}
        }).then(response => {
            console.log("Facebook login seccess", response);
        })
    }

    const responseErrorFacebook = (response) => {

    }

    return (
        <div>
            <FacebookLogin
                appId="150190106992886"
                autoLoad={false}
                callback={responseFacebook} />
        </div>
    )

}

export default Facebook;