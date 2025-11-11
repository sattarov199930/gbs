import { useState } from "react";
import "./MissionSection.css";

function MissionSection() {
  const [activeCard, setActiveCard] = useState(null);

  const missions = [
    {
      id: 1,
      title: "Clean Water Access",
      description: "Ensuring every community has access to safe, clean drinking water through innovative infrastructure solutions.",
      image: "/images/home/Home_Mission_Water.jpg",
    },
    {
      id: 2,
      title: "Sustainable Infrastructure",
      description: "Building resilient water systems that protect our environment and serve future generations.",
      image: "/images/home/Home_Mission_Infrastructure.jpg",
    },
    {
      id: 3,
      title: "Global Partnership",
      description: "Collaborating with international organizations to deliver impactful projects across continents.",
      image: "/images/home/Home_Mission_Partnership.jpg",
    },
    {
      id: 4,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge technology to optimize water management and treatment processes.",
      image: "/images/home/Home_Mission_Technology.jpg",
    },
    {
      id: 5,
      title: "Community Impact",
      description: "Transforming lives by improving health, education, and economic opportunities through water access.",
      image: "/images/home/Home_Mission_Community.jpg",
    },
    {
      id: 6,
      title: "Environmental Protection",
      description: "Preserving natural water resources and ecosystems while meeting humanity's growing water needs.",
      image: "/images/home/Home_Mission_Protection.jpg",
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-header">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-subtitle">
            Transforming the world one water project at a time
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className={`mission-card ${activeCard === mission.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(mission.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="mission-image-container">
                <img 
                  src={mission.image} 
                  alt={mission.title}
                  className="mission-image"
                />
              </div>
              <div className="mission-content">
                <h3 className="mission-card-title">{mission.title}</h3>
                <p className="mission-description">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;