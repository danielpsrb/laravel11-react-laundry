import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from "../../api/authApi";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = {name, email, password, confirm_password};
      const response = await registerUser(data);
      console.log("User registered:", response);
      Swal.fire({
        icon: "success",
        title: "Signup Account Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setMessage("User registered successfully");
      navigate("/login");
    } catch (error) {
      setMessage("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <div className='container-fluid vh-100'>
          <div className='row h-100'>
            <div className='col-md-6 d-none d-md-flex bg-signup'></div>
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
              <form className='w-75' onSubmit={submitRegister}>
                <div className='card-body'>
                  <div className='text-center mb-3'>
                    <img src='/images/logo.png' alt='Avatar' className='img-fluid' width={80} height={80} />
                    <h3 className='mt-2'>Create an Account</h3>
                    <p>Please fill the form to register</p>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                      Name
                    </label>
                    <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                        required
                      />
                      <span className='input-group-text' onClick={togglePasswordVisibility}>
                        <i className={passwordVisible ? "bx bxs-hide" : "bx bxs-show"}></i>
                      </span>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='confirmPassword' className='form-label'>
                      Confirm Password
                    </label>
                    <div className='input-group'>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className='form-control'
                        id='confirmPassword'
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <span className='input-group-text' onClick={togglePasswordVisibility}>
                        <i className={passwordVisible ? "bx bxs-hide" : "bx bxs-show"}></i>
                      </span>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary w-100 mb-3' disabled={loading}>
                    {loading ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> : "Register"}
                  </button>
                  <div className='text-center'>
                    <p className='mb-0'>
                      Already have an account?{" "}
                      <Link to='/login' className='text-decoration-none'>
                        Login now
                      </Link>
                    </p>
                  </div>
                  {message && <div className='alert alert-info mt-3'>{message}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
