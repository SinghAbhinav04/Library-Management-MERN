import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signupPage2.css';

const SignupPage2 = () => {
  const [password, setPassword] = useState('');
  const [isLetter, setIsLetter] = useState(false);
  const [isNumberOrSpecialChar, setIsNumberOrSpecialChar] = useState(false);
  const [isLength, setIsLength] = useState(false);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsLetter(/[a-zA-Z]/.test(value));
    setIsNumberOrSpecialChar(/[\d!@#\$%\^\&*\)\(+=._-]/.test(value));
    setIsLength(value.length >= 10);
  };

  const isValid = isLetter && isNumberOrSpecialChar && isLength;

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    localStorage.setItem('password', password);
    navigate("/signup3");
  }

  return (
    <div className='wrapper'>
      <div className="signup-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: '66%' }}></div>
        </div>
        <div className="signup-header">
          <i className="fas fa-arrow-left"></i>
          <p>Step 2 of 3</p>
        </div>
        <h2>Create a password</h2>
        <form onSubmit={handleNext} className="signup-form">
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={isValid ? '' : 'invalid'}
            />
            <label>Password</label>
            <i className="fas fa-eye-slash"></i>
          </div>
          <div className="password-rules">
            <p>Your password must contain at least:</p>
            <ul>
              <li className={isLetter ? 'valid' : ''}>1 letter</li>
              <li className={isNumberOrSpecialChar ? 'valid' : ''}>
                1 number or special character (example: # ? ! &)
              </li>
              <li className={isLength ? 'valid' : ''}>10 characters</li>
            </ul>
          </div>
          <button className={`next-button ${isValid ? '' : 'disabled'}`} disabled={!isValid}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage2;
