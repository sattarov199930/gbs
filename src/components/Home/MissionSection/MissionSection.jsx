import { useState } from "react";
import "./MissionSection.css";

function MissionSection() {
  const [activeCard, setActiveCard] = useState(null);

  const missions = [
    {
      id: 1,
      title: "Utilities Management",
      description: "Ensuring resilient and compliant utility services that support long-term community growth.",
      image: "/images/home/Home_Mission_Water.jpg",
    },
    {
      id: 2,
      title: "Sustainable Infrastructure",
      description: "Delivering high-quality, sustainable architectural solutions that advance client goals and strengthen the built environment.",
      image: "/images/home/Home_Mission_Infrastructure.jpg",
    },
    {
      id: 3,
      title: "Global Partnership",
      description: "Collaborating with international organizations and corporations to deliver impactful projects across continents.",
      image: "/images/home/Home_Mission_Partnership.jpg",
    },
    {
      id: 4,
      title: "Innovation & Technology",
      description: "Advancing next-generation industrial electronic and autonomous systems through precise design, intelligent automation, and rigorous engineering innovation.",
      image: "/images/home/Home_Mission_Technology.jpg",
    },
    {
      id: 5,
      title: "Community Impact",
      description: "Transforming communities by improving health, education, and economic opportunities.",
      image: "/images/home/Home_Mission_Community.jpg",
    },
    {
      id: 6,
      title: "Environmental Protection",
      description: "Protecting natural resources and environments through science-driven solutions that promote sustainability, compliance, and long-term ecological resilience.",
      image: "/images/home/Home_Mission_Protection.jpg",
    }
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/*<div className="mission-header">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-subtitle">
            Transforming the world one water project at a time
          </p>
        </div>*/}

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