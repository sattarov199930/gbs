import { useState } from "react";
import "./OurIntro.css";

function OurIntro() {
  const [activeValue, setActiveValue] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(null);

  const values = [
    {
      id: 0,
      title: "Excellence",
      description: "We deliver outstanding results through meticulous attention to detail and unwavering commitment to quality in every project we undertake."
    },
    {
      id: 1,
      title: "Integrity",
      description: "Transparency and honesty guide our relationships with clients, partners, and communities, building trust that lasts for decades."
    },
    {
      id: 2,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to tackle the world's most challenging infrastructure problems."
    },
    {
      id: 3,
      title: "Sustainability",
      description: "Environmental responsibility is at our core, ensuring projects benefit both present communities and future generations."
    }
  ];

  const milestones = [
    { 
      year: "1995", 
      event: "Company Founded", 
      description: "Global Business Services was born from a vision to revolutionize water infrastructure. A small team of passionate engineers came together to create lasting impact."
    },
    { 
      year: "2003", 
      event: "First International Project", 
      description: "We expanded beyond borders, delivering our first major international water treatment facility in Southeast Asia, marking the beginning of our global presence."
    },
    { 
      year: "2010", 
      event: "1000+ Projects Completed", 
      description: "A major milestone achieved - over 1000 successful projects delivered across 30 countries, impacting millions of lives with clean water access."
    },
    { 
      year: "2015", 
      event: "Partnership with World Bank", 
      description: "Recognized as a trusted partner by the World Bank, opening doors to collaborate on large-scale sustainable infrastructure projects worldwide."
    },
    { 
      year: "2020", 
      event: "Global Expansion", 
      description: "Strategic expansion into new markets across Africa, Latin America, and Eastern Europe, establishing regional offices and local partnerships."
    },
    { 
      year: "2024", 
      event: "Industry Leaders", 
      description: "Recognized as global leaders in sustainable water infrastructure, setting new standards for innovation, quality, and environmental stewardship."
    }
  ];

  const defaultMilestoneText = "Hover over each milestone to learn more about our journey and the key moments that shaped Global Business Services into the company we are today.";

  return (
    <section className="about-section">
      {/* Main About Content */}
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Global Business Services</h2>
          <p className="about-subtitle">
            Transforming visions into reality for nearly three decades
          </p>
        </div>

        <div className="about-content-grid">
          {/* Story Side */}
          <div className="about-story">
            <div className="story-card">
              <h3 className="story-heading">Our Story</h3>
              <p className="story-text">
                Founded in 1995, Global Business Services emerged from a simple yet powerful vision: 
                to deliver world-class water infrastructure solutions that transform communities and 
                protect our planet's most precious resource.
              </p>
              <p className="story-text">
                What began as a small team of passionate engineers has grown into a global leader, 
                serving over 50 countries and impacting millions of lives. Our expertise spans from 
                project conception to completion, ensuring every initiative meets the highest standards 
                of quality, sustainability, and innovation.
              </p>
              <p className="story-text">
                Today, we partner with the world's leading financial institutions and development 
                organizations, bringing expertise, integrity, and innovation to every challenge we face.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Expert Team</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">30</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Values Side */}
          <div className="about-values">
            <h3 className="values-heading">Our Core Values</h3>
            <div className="values-selector">
              {values.map((value) => (
                <button
                  key={value.id}
                  className={`value-tab ${activeValue === value.id ? 'active' : ''}`}
                  onClick={() => setActiveValue(value.id)}
                >
                  <span className="value-icon">{value.icon}</span>
                  <span className="value-name">{value.title}</span>
                </button>
              ))}
            </div>
            <div className="value-display">
              <div className="value-icon-large">{values[activeValue].icon}</div>
              <h4 className="value-title">{values[activeValue].title}</h4>
              <p className="value-description" key={activeValue}>
                {values[activeValue].description}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="about-timeline-section">
          <h3 className="timeline-heading">Our Journey</h3>
          <div className="timeline-bar">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-segment ${activeMilestone === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveMilestone(index)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                <span className="timeline-icon">{milestone.icon}</span>
                <span className="timeline-text">
                  <span className="timeline-year">{milestone.year}</span>
                  <span className="timeline-event">{milestone.event}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="timeline-description">
            <p key={activeMilestone}>
              {activeMilestone !== null ? milestones[activeMilestone].description : defaultMilestoneText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurIntro;