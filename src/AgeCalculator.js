// src/AgeCalculator.js
import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() 
{
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => 
  {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label>Enter Your Birth Date:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className="calculate-button" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
}

export default AgeCalculator;