import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../styles/loginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8001/login", { email, password })
            .then((result) => {
                console.log(result);
                navigate('/userProfile');
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div className="login-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className="form-section">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="email" required placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type="password" required placeholder="Enter your password" minLength={8} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
