import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from "../../api/authApi";
import "boxicons/css/boxicons.min.css";
import { authSession } from "../../context/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = authSession();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const credentials = {email, password};
      const response = await loginUser(credentials);
      const data = response.data.name;
      login(data);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Login successfully",
      });
      setMessage("User logged in successfully");
      navigate("/home", {replace: true });
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-fluid vh-100'>
      <div className='row h-100'>
        <div className='col-md-6 d-none d-md-flex bg-image'></div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <form className='w-75' onSubmit={submitLogin}>
            <div className='card-body'>
              <div className='text-center mb-3'>
                <img src='/images/logo.png' alt='Avatar' className='img-fluid' width={80} height={80} />
                <h3 className='mt-2'>Welcome Back!</h3>
                <p>Please login to your account</p>
              </div>
              {message && <div className='alert alert-danger mt-3'>{message}</div>}
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <div className='input-group'>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className='input-group-text' onClick={togglePasswordVisibility}>
                    <i className={passwordVisible ? "bx bxs-hide" : "bx bxs-show"}></i>
                  </span>
                </div>
              </div>
              <div className='mb-3 form-check'>
                <input type='checkbox' className='form-check-input' id='rememberMe' />
                <label className='form-check-label' htmlFor='rememberMe'>
                  Remember me
                </label>
                <a href='#' className='float-end'>
                  Forgot Password?
                </a>
              </div>
              <button type='submit' className='btn btn-primary w-100 mb-3' disabled={loading}>
                {loading ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> : "Login"}
              </button>
              <div className='text-center'>
                <p className='mb-0'>
                  Don't have an account?{" "}
                  <Link to='/register' className='text-decoration-none'>
                    Sign up now
                  </Link>
                </p>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
