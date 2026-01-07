
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src="https://www.valleypointtechnologies.com/assets/img/logo.png" />
        </div>

        
        <nav className="navbar-menu">
          <a href="#home" className="active">Home</a>
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
