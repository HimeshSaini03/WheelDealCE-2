import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginForm.css"

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const getUserDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    window.localStorage.setItem("login", true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const users = getUserDataFromLocalStorage();
      const user = users.find(user => user.email === formData.email && user.password === formData.password);

      if (user) {
        navigate("/"); 
        window.location.reload();
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='signUpContainer'>
      <h1 className='signUpTitle'>Sign In</h1>

      <form onSubmit={handleSumbit} className='signUpForm'>
        <label>Email: </label>
        <input 
          type="email" 
          placeholder='Enter your Email here' 
          id='email'  
          onChange={handleChange}
          className='signUpInput' 
        />

        <label>Password: </label>
        <input 
          type="password" 
          placeholder='Enter password' 
          id='password'
          onChange={handleChange}
          className='signUpInput' 
        />

        <button disabled={loading} className='signUpButton'>
          {loading ? 'Loading....' : 'Sign In'}
        </button>
      </form>

      <hr className='signUpHr' />

      <div className='signUpLink'>
        <p>Don't have an account?</p>
        <Link to={"/signup"} className='signUpLinkText'>
          Sign Up
        </Link>
      </div>

      {error && <p className='signUpError'>{error}</p>}
    </div>
  )
}
