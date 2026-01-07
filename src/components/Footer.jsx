import React from "react"
import "./Footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
   <div className="bottombar">
      <div className="bottombar-left">
        <span>
          <i className="fas fa-phone"></i><a href="tel:+914466949352">044-66949352</a>

        </span>
        <span>
          <i className="fas fa-envelope"></i> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@valleypointtechnologies.com">info@valleypointtechnologies.com</a>

        </span>
      </div>

      <div className="bottombar-right">
        <a href="https://www.facebook.com/ValleyPointTechnologies/photos/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://x.com/valleypointtech"><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/valleypointtechnologies/"><i className="fab fa-instagram"></i></a>
        <a href="https://in.linkedin.com/company/valley-point-technologies"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  )
}

export default Footer