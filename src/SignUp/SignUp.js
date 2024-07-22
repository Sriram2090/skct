import React, { useState } from 'react';
import './SignUp.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here, such as sending data to a server

    // For demonstration purposes, log the form data to the console
    console.log('Form Data:', formData);

    // Example: Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password must match!');
      return;
    }

    // Example: Check if the email is valid (using a simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Continue with the signup logic if all checks pass
   
  
  
  alert('Signup successful!');

    
  };

  return (
    <div className='s' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150h',}}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', borderRadius: '25px', boxShadow: ' 4px 5px 10px black', height:'550px',background:'transparent',marginTop:'100px'}}>
        <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{background:'transparent',borderColor:'black',borderRadius:'20px'}}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{background:'transparent',borderColor:'black',borderRadius:'20px'}}
          />
        </label>

        <label type="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '95%', marginBottom: '15px', padding: '8px' ,background:'transparent',borderColor:'black',borderRadius:'20px'}}/>
        <label type="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: '95%', marginBottom: '20px', padding: '8px',background:'transparent',borderColor:'black',borderRadius:'20px' }} />
          <label type="password">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{ width: '95%', marginBottom: '20px', padding: '8px',background:'transparent',borderColor:'black',borderRadius:'20px' }} />

        <div style={{textAlign:'center'}}>
          <button type="submit"   style={{ width: '50%', padding: '10px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer',}}>Sign Up</button>
          <h5>Already have an account? <a href="/SignIn" style={{color:'blue',}}>Sign in</a></h5>
        </div>
      </form>
    </div>
  );
};

export default SignUp;