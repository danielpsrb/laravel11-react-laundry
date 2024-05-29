import React, {useState} from "react";
import {loginUser} from "../../api/authApi";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const credentials = {email, password};
      const response = await loginUser(credentials);
      console.log("User logged in successfully:", response);
      setMessage("user successfully login");
      navigate("/home");
    } catch (err) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className='registration-container'>
      <form onSubmit={handleSubmit} className='registration-form'>
        <h2>Login</h2>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default SignIn;
