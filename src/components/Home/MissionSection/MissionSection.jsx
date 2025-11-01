import { useState } from "react";
import "./MissionSection.css";

function MissionSection() {
  const [activeCard, setActiveCard] = useState(null);

  const missions = [
    {
      id: 1,
      title: "Clean Water Access",
      description: "Ensuring every community has access to safe, clean drinking water through innovative infrastructure solutions.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
      icon: "💧"
    },
    {
      id: 2,
      title: "Sustainable Infrastructure",
      description: "Building resilient water systems that protect our environment and serve future generations.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      icon: "🏗️"
    },
    {
      id: 3,
      title: "Global Partnership",
      description: "Collaborating with international organizations to deliver impactful projects across continents.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge technology to optimize water management and treatment processes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      icon: "⚡"
    },
    {
      id: 5,
      title: "Community Impact",
      description: "Transforming lives by improving health, education, and economic opportunities through water access.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      icon: "❤️"
    },
    {
      id: 6,
      title: "Environmental Protection",
      description: "Preserving natural water resources and ecosystems while meeting humanity's growing water needs.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      icon: "🌿"
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
                <div className="mission-overlay">
                  <span className="mission-icon">{mission.icon}</span>
                </div>
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