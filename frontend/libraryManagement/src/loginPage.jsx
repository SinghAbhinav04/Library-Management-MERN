import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../styles/loginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8001/login", { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            console.log('Login successful:', token);
            navigate('/userProfile');
        } catch (err) {
            console.error('Login failed:', err);
        }

  
    }

    return (
        <div className="login-container">
        
            <div className="form-section">
            <h1>Login to app</h1>
                <hr></hr>
               
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="email" required placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type="password" required placeholder="Enter your password" minLength={8} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
                <hr></hr>
                <p>Don't have an account? <Link to="/signup">Signup Here</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;
