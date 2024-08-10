import { Link } from "react-router-dom";
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="welcome-section">
                <h1>Welcome to Library Management App</h1>
            </div>
        </div>
    );
}

export default HomePage;
