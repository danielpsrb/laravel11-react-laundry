import React, { useState, useRef } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submitLogin = (event) => {
        event.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axios.post('http://127.0.0.1:8000/api/login', payload).then(response =>{
            console.log(response.data);
        })
    }

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <form className="w-75" onSubmit={submitLogin}>
                        <div className="card-body">
                            <div className="text-center mb-3">
                                <img src="https://i.pinimg.com/originals/75/ae/0b/75ae0bcba2cac8d7289114883dea1f74.png" alt="Avatar" className="img-fluid" width={80} height={80} />
                                <h3 className="mt-2">Welcome Back!</h3>
                                <p>Please login to your account</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" ref={emailRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <input type={passwordVisible ? "text" : "password"} className="form-control" id="password" ref={passwordRef} />
                                    <span className="input-group-text" onClick={togglePasswordVisibility}>
                                        <i className={passwordVisible ? "bx bxs-hide" : "bx bxs-show"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                <a href="#" className="float-end">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                            <div className="text-center">
                                <p className="mb-0">Don't have an account? <Link to="/register" className='text-decoration-none'>Sign up now</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
