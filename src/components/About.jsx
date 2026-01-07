import "./About.css";

const About = () => {
  const stats = [
    { num: "$5M", text: "Worth Products Built", color: "#4ade80" },
    { num: "100+", text: "Team Members", color: "#2563eb" },
    { num: "20+", text: "SaaS Products Built", color: "#1e293b" },
    { num: "13 Years", text: "In Business", color: "#fbbf24" },
    { num: "100+", text: "Clients Worldwide", color: "#f87171" },
    { num: "500K+", text: "Hours Invested", color: "#1d4ed8" },
  ];

  return (
   <>
    <div className="about-section">
      {/* Top Dark Section */}
      <section className="about-top">
        <h1 className="about-heading">Who we are?</h1>
        <p className="about-description">
          Founded in 2011, ValleyPoint has been on a journey to revolutionize e-commerce and IT services.
          Over the years, we've grown into a dynamic team of professionals dedicated to delivering excellence in everything we do.
        </p>
      </section>

      {/* Bottom White Section */}
      <section className="about-bottom">
        {/* Stats Grid */}
        <div className="about-stats">
          {stats.map((item, index) => (
            <div key={index} className="about-stat-card">
              <h2 className="about-stat-number" style={{ color: item.color }}>
                {item.num}
              </h2>
              <p className="about-stat-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Side Text */}
        <div className="about-text">
          <h4 className="about-subheading">Our Team</h4>
          <h2 className="about-title">
            A superb story is crafted by an excellent team
          </h2>
          <p className="about-paragraph">
            Our team, composed of industry experts, skilled developers, creative designers, and customer-centric professionals, 
            is dedicated to empowering businesses to succeed. Passionate about our craft, we work collaboratively to deliver 
            innovative solutions tailored to meet each client's unique needs, driving growth and prosperity.
          </p>
        </div>
      </section>
    </div>
   </>
  )
}

export default About