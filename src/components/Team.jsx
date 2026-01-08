import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Vijay",
      role: "Chief Executive Officer (CEO)",
      image: "https://wikibiography.in/wp-content/uploads/2025/02/Thalapathy-Vijay-age.jpg"
    },
    {
      name: "Trisha",
      role: "Chief Technology Officer (CTO)",
      image: "https://tse3.mm.bing.net/th/id/OIP.kieMVxhFX6aeuK3mMrKp4wHaGw?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Suriya",
      role: "Chief Operating Officer (COO)",
      image: "https://photosfile.com/wp-content/uploads/2022/08/Suriya-Photos-20.jpeg"
    },
    {
      name: "Madhavan",
      role: "Chief Financial Officer (CFO)",
      image: "https://wikibio.in/wp-content/uploads/2019/08/R.-Madhavan.jpg"
    },
    {
      name: "Mamitha Baiju",
      role: "Project Manager",
      image: "https://vefeast.com/wp-content/uploads/2024/05/Mamitha-Baiju.webp"
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <span className="team-badge">TEAM</span>
          <h2 className="team-title">
            Meet Our <span className="team-highlight">Expert Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
