import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
const navigate = useNavigate();
const goHome = () => {
    navigate("/");               
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo" onClick={(e) => { e.preventDefault(); goHome(); }} >
          <img src="https://www.valleypointtechnologies.com/assets/img/logo.png" />
        </div>

        
         <nav className="navbar-menu">
      <a href="#home" onClick={(e) => { e.preventDefault(); goHome(); }} className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
       <div className="navbar-cta">
          <a href="#get-started" className="btn-primary">Get Started</a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
