import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../styles/signUpPage.css';

function SignUpPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8001/createUser", { name, email, password })
            .then((result) => { console.log(result) })
            .catch(err => { console.log(err) })
    }

    return (
        <div className="signup-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className="form-section">
                <h1>Sign Up</h1>
                <form onSubmit={Submit} className="signup-form">
                    <label>Name</label>
                    <input type="text" required placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />

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

export default SignUpPage;
