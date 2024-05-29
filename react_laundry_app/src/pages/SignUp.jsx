import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const submitRegister = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div>
                <div className="container-fluid vh-100">
                    <div className="row h-100">
                        <div className="col-md-6 d-none d-md-flex bg-signup"></div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <form className="w-75" onSubmit={submitRegister}>
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <img src="/images/logo.png" alt="Avatar" className="img-fluid" width={80} height={80} />
                                        <h3 className="mt-2">Create an Account</h3>
                                        <p>Please fill the form to register</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control" id="password" />
                                            <span className="input-group-text">
                                                <i className="bx bxs-show"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control" id="confirmPassword" />
                                            <span className="input-group-text">
                                                <i className="bx bxs-show"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                                    <div className="text-center">
                                        <p className="mb-0">Already have an account? <Link to="/login" className='text-decoration-none'>Login now</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp