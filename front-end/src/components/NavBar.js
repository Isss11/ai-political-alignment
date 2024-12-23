import "./nav-bar.css";
import applicationLogo from "../assets/maple-vote-logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar-container">
      <header className="nav-bar-header">
        <img src={applicationLogo} alt="Maple Vote Logo" width={80}></img>
      </header>
    </nav>
  );
};

export default NavBar;
