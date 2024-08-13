import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/signUpPage.css';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNext = (event) => {
        event.preventDefault();
        if (email) {
            localStorage.setItem('email', email);
            navigate('/signup2');
        }
    };

    return (
        <div className="wrapper">
        <div className="signup-form-section">
            <hr />
            <h1>Sign Up</h1>
            <form onSubmit={handleNext} className="signup-form">
                <div className="input-field">
                    <input
                        type="email"
                        required
                        placeholder="xyz@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email address</label>
                </div>
                <button type="submit">Next</button>
            </form>
            <hr />
            <p>Already have an account?  <Link to='/login'>Log in here</Link></p>
        </div>
        </div>
    );
}

export default SignUpPage;
