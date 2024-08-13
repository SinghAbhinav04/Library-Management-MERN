import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signupPage3.css'; 

function SignupPage3() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        try {
            await axios.post("http://localhost:8001/signup", { email, password, name });
            navigate("/login");
        } catch (error) {
            console.error('Error during creating user', error);
        }
    }

    return (
        <div className='wrapper'>
            <div className='signup-container'>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <div className="signup-header">
                    <i className="fas fa-arrow-left"></i>
                    <p>Step 3 of 3</p>
                </div>
                <h2>Enter your details</h2>
                <form onSubmit={submitForm}>
                    <div className="input-group">
                        <label htmlFor="name">Enter your full name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            placeholder='Abhinav Singh' 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage3;
