import React, { useState } from 'react'
import './Login.css';

function Login({ userCredentials, setLoggedIn }) {

    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    const handlechange = (e) => {
        console.log(e.target.name, e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, password } = userCredentials;
        if (user.name === name && Number(user.password) === password) {
            setLoggedIn(1);
            console.log("userCredentials")
        }
        setUser({
            name: "",
            password: ""
        });

    }

    return (
        <div className='login'>
            {/* <div className='info'></div> */}
            <div className='form-container'>
                <h1 className='login-heading'>Login</h1>
                <form className='form'>
                    <input
                        type="text"
                        name='name'
                        value={user.name}
                        placeholder='Enter Name'
                        onChange={(e) => { handlechange(e) }}
                        className='input-name'
                    />
                    <input
                        type="text"
                        name='password'
                        value={user.password}
                        placeholder='Enter Password'
                        onChange={(e) => { handlechange(e) }}
                        className='input-password'
                    />
                    <button className='login-button' onClick={(e) => handleSubmit(e)}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login