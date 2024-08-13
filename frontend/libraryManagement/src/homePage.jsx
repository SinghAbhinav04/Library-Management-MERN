import { Link } from "react-router-dom";
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="container">
            <div className="box1">
                <div className='side-nav-bar'>
                    <ul>
                        <li>Library Management</li>
                        <li className='home-btn'>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li className='search-btn'>
                           <Link to="/search">Search</Link>
                        </li>
                    </ul>
                    </div>
            </div>

            <div className="box2">
                About
                </div>
            <div className="box3">
                <div className='nav-bar'>
                    <ul>
                        <li className='signup-btn'><Link to="/signup">SignUp</Link></li>
                        <li className='login-btn'><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                Content
            </div>
        </div>
    );
}

export default HomePage;
