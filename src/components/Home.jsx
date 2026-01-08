import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [success, setSuccess] = useState(0);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYears((prev) => (prev < 25 ? prev + 1 : prev));
    }, 240);

    const clientsInterval = setInterval(() => {
      setClients((prev) => (prev < 50 ? prev + 1 : prev));
    }, 120);

    const successInterval = setInterval(() => {
      setSuccess((prev) => (prev < 98 ? prev + 1 : prev));
    }, 61);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(clientsInterval);
      clearInterval(successInterval);
    };
  }, []);

  const navigate = useNavigate()

  const goContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

const goProducts = () => {
  navigate("/clients");
     setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight / 2,
      behavior: "smooth",
    });
  }, 400);
};

  return (
    <div className="home-container">
      <div className="home-content">

        {/* Left Section */}
        <div className="home-text-side">
          <h1 className="home-headline">
            Web Design & Development Company
          </h1>

          <p className="home-description">
            We provide top-of-the-range website design and development,
            graphic designing, digital marketing, SEO services, and Mobile Apps
            development, among others.
          </p>

          <div className="home-button-group">
            <button className="btn-filled" onClick={(e) => { e.preventDefault(); goContact(); }}>Get a Free Consultation</button>
            <button className="btn-outline">Our Services</button>
            <button className="btn-outline" onClick={(e) => { e.preventDefault(); goProducts(); }}>Our Products</button>
          </div>

          <div className="home-stats">
            <div className="stat-box">
              <span className="stat-number">{years}+</span>
              <span className="stat-label">Years Experience</span>
            </div>

            <div className="stat-box">
              <span className="stat-number">{clients}+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>

            <div className="stat-box">
              <span className="stat-number">{success}%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="home-image-side">
          <div className="image-frame">
            <img
              src="https://www.valleypointtechnologies.com/assets/img/prod-eng.png"
              alt="Web Development"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
