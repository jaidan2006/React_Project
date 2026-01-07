import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const stats = [
    { num: 5000000, text: "Worth Products Built", prefix: "$", color: "#4ade80" },
    { num: 100, text: "Team Members", suffix: "+", color: "#2563eb" },
    { num: 20, text: "SaaS Products Built", suffix: "+", color: "#1e293b" },
    { num: 13, text: "In Business", suffix: " Years", color: "#fbbf24" },
    { num: 100, text: "Clients Worldwide", suffix: "+", color: "#f87171" },
    { num: 500000, text: "Hours Invested", suffix: "+", color: "#1d4ed8" },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const duration = 6000; 
    const intervalTime = 30; 
    const steps = duration / intervalTime;

    const increments = stats.map((stat) => stat.num / steps);

    const interval = setInterval(() => {
      setAnimatedStats((prev) =>
        prev.map((value, i) => {
          const next = value + increments[i];
          return next >= stats[i].num ? stats[i].num : next;
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (value) => {
    if (value >= 1000) {
      return Math.floor(value).toLocaleString(); 
    }
    return Math.floor(value);
  };

  return (
    <div className="about-section">
      {/* Top Dark Section */}
      <section className="about-top">
        <h1 className="about-heading">Who we are?</h1>
        <p className="about-description">
          Founded in 2011, ValleyPoint has been on a journey to revolutionize e-commerce and IT services.
          Over the years, we've grown into a dynamic team of professionals dedicated to delivering excellence in everything we do.
        </p>
         <h3 className="about-legacy-heading">Our Legacy</h3>
  <p className="about-legacy-quote">
   -  “Success isn’t just what we build, it’s the impact we create for our clients.”
  </p>
      </section>

      {/* Bottom White Section */}
      <section className="about-bottom">
        {/* Stats Grid */}
        <div className="about-stats">
          {stats.map((item, index) => (
            <div key={index} className="about-stat-card">
              <h2
                className="about-stat-number"
                style={{ color: item.color }}
              >
                {item.prefix || ""}{formatNumber(animatedStats[index])}{item.suffix || ""}
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
            Our team includes experienced professionals, talented developers, creative designers, and people who truly care about our clients. We work together to build websites and digital solutions that look great, work smoothly, and help businesses grow online. We enjoy what we do and put our heart into every project, creating solutions that match each client’s goals. By understanding our clients’ needs and turning ideas into reality, we help brands build a strong online presence and achieve long-term success.
          </p>
          <p className="about-paragraph"> We believe that a good website is more than just design—it should be easy to use, fast, and reliable. Our team focuses on creating clean layouts, smooth performance, and a great user experience across all devices. From planning and design to development and launch, we support our clients at every step. Our goal is to deliver digital solutions that help businesses connect with their customers and grow with confidence.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
