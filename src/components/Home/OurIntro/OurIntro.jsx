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
      year: "2002", 
      event: "Company Founded", 
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
        <div className="about-content-grid">
          {/* Story Side */}
          <div className="about-story">
            <div className="story-card">
              <h3 className="story-heading">Our Story</h3>
              <p className="story-text">
                Global Business Services (GBS) is a private consulting firm with a successful track record in the Central Asia and Eastern Europe. Since 2002, GBS has been providing professional consulting services in the various economic and social fields including agriculture and natural resources management, healthcare, public utility, urban infrastructure, and other sectors.
              </p>
              <p className="story-text">
                GBS is a team of professionals experienced in developing hands-on strategies for capturing project achievements. The GBS team is focused on giving clients unique competitive advantages resulted from joint efforts devoted to solving complex issues and seizing far-reaching opportunities. In its work, GBS relies on permanent employees with long and successful experience in implementing projects financed by international financial institutions (Asian Development Bank (ADB), World Bank, European Bank for Reconstruction and Development (EBRD), French Development Agency (AFD), Swiss State Secretariat for Economic Affairs (SECO), Islamic Development Bank (IDB), KfW, IFC, and etc.).
              </p>
              <p className="story-text">
              External experts are always ready to participate in projects. Criteria, according to which external experts are selected, include educational background, technical experience and regional practice, communication skills, and etc. Such cooperation is beneficial for both parties: for GBS, it gives access to industrial solutions; associate experts build their investment project implementation capacities  
              </p>
            </div>

            {/* Stats Grid */}
            {/*
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">IFI-financed Projects</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients in Central Asia and Europe</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">12+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="about-stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
            */}
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
          {/*<h3 className="timeline-heading">Our Journey</h3>*/}
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