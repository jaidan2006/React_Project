import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <span className="contact-badge">CONTACT</span>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        {/* LEFT SECTION */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Feel free to reach out with any questions about the products and
            services.
          </p>

          <div className="info-block">
            <strong><i className="fas fa-envelope"></i> Email:</strong>
            <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@valleypointtechnologies.com">info@valleypointtechnologies.com</a>
            </p>
          </div>

          <div className="info-block">
            <strong><i className="fas fa-phone"></i> Phone:</strong>
            <p><a href="tel:+914466949352">+91 44669 49352</a></p>
            <p><a href="tel:+914428269021">+91 44282 69021</a></p>

          </div>

          <div className="info-block">
            <strong><i className="fa-solid fa-location-dot"></i> Address:</strong>

            <p>
              <img style={{ width: "40px" }} src="https://whatemoji.org/wp-content/uploads/2020/07/India-Emoji.png" required /><br required />
              Valleypoint Technologies Pvt Ltd.<br required />
              #7 , Rosy Tower ,<br required />
              Nungambakkam High Road<br required />
              Nungambakkam, Chennai - 600034.
            </p>
            <p>
              <img style={{ width: "40px", marginBottom: "6px" }} src="https://logos-world.net/wp-content/uploads/2023/11/American-Flag-Emoji.png" required /><br required />
              Valleypoint Technologies Pvt Ltd.<br required />
              2055 Limestone Rd,<br required />
              STE 200-c, Wilmington, DE,<br required />
              New Castle USA - 19808.
            </p>
            <p>
              <strong><i className="fa-solid fa-clock"></i> Opening Hours:</strong><b required />
              Mon-Sat: 10 AM - 7 PM<br required />
              Sunday: Closed
            </p>



          </div>


        </div>

        {/* RIGHT SECTION */}
          <div className="contact-form">
            <form action="Contact.jsx" method="post" onSubmit={(e) => { e.preventDefault()
            alert("Form Submitted Successfully!")
            e.target.reset()
          }}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name <span>*</span></label>
                <input type="text" placeholder="Enter your first name" required />
              </div>

              <div className="form-group">
                <label>Last Name <span>*</span></label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email <span>*</span></label>
                <input type="email" placeholder="Enter your email (eg.,example@gmail.com)" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
              </div>

              <div className="form-group">
                <label>Phone number <span>*</span></label>
                <input type="text" placeholder="Enter your phone number" required />
              </div>
            </div>

            <div className="form-group">
              <label>Subject <span>*</span></label>
              <input type="text" placeholder="Enter your subject" required />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea rows="17" placeholder="Would you like to say something..." required></textarea>
            </div>

            <button className="submit-btn">Submit</button>
            </form>

          </div>
      </div>
    </div>
  );
};

export default Contact;
