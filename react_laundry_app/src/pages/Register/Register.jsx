import React, {useState} from "react";
import {registerUser} from "../../api/authApi";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {name, email, password, confirm_password};
      const response = await registerUser(userData);
      console.log("User registered:", response);
      setMessage("user successfully registered");
      navigate("/home");
    } catch (err) {
      setMessage("Failed to register. Please try again.");
    }
  };

  return (
    <div className='registration-container'>
      <form onSubmit={handleSubmit} className='registration-form'>
        <h2>Register</h2>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input type='password' value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type='submit'>Register</button>
        {message && <p className='message'>{message}</p>}
      </form>
    </div>
  );
}

export default Register;
