import "./nav-bar.css";
import applicationLogo from "../assets/maple-vote-logo-white-transparent-nav-bar.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <nav className="nav-container">
        <div>
          <Link to="/" className="nav-page-link">
            <img src={applicationLogo} alt="Maple Vote Logo" width={100}></img>
          </Link>
        </div>
        <div>
          <Link to="/analysis" className="nav-page-link">
            Analysis
          </Link>
          <Link to="/about" className="nav-page-link">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
