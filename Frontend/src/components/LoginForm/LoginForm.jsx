import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginForm.css"

export default function SignUp() {
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

  const saveUserDataToLocalStorage = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(data);
    localStorage.setItem("login", true);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };

  const getUserDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const emailExists = (email) => {
    const users = getUserDataFromLocalStorage();
    return users.some(user => user.email === email);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (emailExists(formData.email)) {
      setError('Email already exists');
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulating an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save user data to local storage
      saveUserDataToLocalStorage(formData);

      // Navigate to another page after successful sign-up
      navigate("/"); // Change to the appropriate route
      window.location.reload();

    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='signUpContainer'>
      <h1 className='signUpTitle'>Sign Up</h1>

      <form onSubmit={handleSumbit} className='signUpForm'>
        <label>Full Name: </label>
        <input 
          type="text" 
          placeholder='Enter your Name here' 
          id='fullName'
          onChange={handleChange}
          className='signUpInput' 
        />

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

        <label>Confirm Password: </label>
        <input 
          type="password" 
          placeholder='Confirm Your password' 
          id='confirmPassword'
          onChange={handleChange}
          className='signUpInput' 
        />

        <button disabled={loading} className='signUpButton'>
          {loading ? 'Loading....' : 'Sign Up'}
        </button>
      </form>

      <hr className='signUpHr' />

      <div className='signUpLink'>
        <p>Already have an account?</p>
        <Link to={"/login"} className='signUpLinkText'>
          Sign In
        </Link>
      </div>

      {error && <p className='signUpError'>{error}</p>}
    </div>
  )
}
