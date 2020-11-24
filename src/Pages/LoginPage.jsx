import React, { useState } from 'react'
import Authkit from '../Data/Authkit'
import { useHistory } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

export default function LoginPage() {

    const [loginFormData, setLoginFormData] = useState({});

    const history = useHistory();

    function handleOnChange(e) {
        setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        Authkit.loginUser(loginFormData)
            .then((res) => res.json())
            .then((data) => {
               //console.log(data)
               Authkit.setToken(data.token)
               if(data.token){
                   history.push('/')
               }
            })
    }
    return (

        <div>
            <LoginForm 
            handleOnChange={handleOnChange}
            email={loginFormData['email']}
            password={loginFormData['password']}
            handleOnSubmit={handleOnSubmit}
            />

        </div>
    )
}
