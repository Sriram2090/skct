// Registration.js

import React, { useState, useRef, useEffect } from 'react';
import './Registration.css'; // Import CSS file

const Registration = () => {
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const Alt1 = () => {
    alert('Form Submitted Successfully');
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='img-container'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/025/467/320/original/male-doctor-uniform-cartoon-character-pointing-at-empty-space-for-medical-healthcare-presentation-vector.jpg'
            alt="Doctor"
          />
        </div>

        <div className='content'>
          <center>
            <h1>Required Details</h1>
          </center>
          <div className="form-container">
            <form>
              <div className='btn214'>
                <label className='l1'>Patient's full Name:</label>
                <input
                  type='text'
                  ref={firstNameRef} 
                  required
                  placeholder='Enter the Name'
                />
                <br /><br />
              </div>

              <div className='btn214'>
                <label>Age : </label>
                <select required>
                  <option value="0-10">Select Age Group</option>
                  <option value="0-10">0 - 10</option>
                  <option value="10-18">10 - 18</option>
                  <option value="18-30">18 - 30</option>
                  <option value="31-45">31 - 45</option>
                  <option value="45+">Greater Than 45</option>
                </select>
              </div>

              <div className='btn214'>
                <label className='l1'>Phone Number:</label>
                <input type='number' required placeholder='Enter the Mobile Number' />
              </div>

              <div className='btn214'>
                <label className='l1'>Gender :</label>
                <select required className='s1'>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className='btn214'>
                <label className='l1'>Medicine Name :</label>
                <input
                  type='text'
                  placeholder='Enter Medicine Name'/>
              </div>

              <div className='btn214'>
                <label className='l1'>Quantity : </label>
                <input type='number' placeholder='Medicine Quantity' />
              </div>

              <div className='btn214'>
                <label className='l1'>Address :</label>
                <input type='text' id='location' name='location' placeholder='Enter the Address' />
              </div>

              <div className='btn214'>
                <label className='l1'>Prescription : </label>
                <input type='file' />
              </div>

              <br />
              <center>
                <button type="submit" className="btn2" onClick={Alt1}>
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
