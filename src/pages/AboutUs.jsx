import "../css/AboutUs.css";

function AboutUs() {
  const leadership = [
    {
      name: "Dr. Michael Chen",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "20+ years leading water infrastructure innovation with a PhD in Environmental Engineering from MIT."
    },
    {
      name: "Sarah Williams",
      position: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Former VP at Fortune 500 engineering firm. Expert in operational excellence and project delivery."
    },
    {
      name: "David Rodriguez",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Pioneer in SCADA systems and automation. Led digital transformation initiatives across the industry."
    },
    {
      name: "Dr. Amira Patel",
      position: "Chief Sustainability Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Environmental scientist passionate about water conservation and sustainable infrastructure solutions."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission",
      description: "To design, implement, and maintain world-class water infrastructure systems that ensure safe, reliable, and sustainable water resources for communities and industries worldwide."
    },
    {
      icon: "🔭",
      title: "Vision",
      description: "To be the global leader in innovative water infrastructure solutions, setting the standard for excellence, sustainability, and technological advancement in the industry."
    },
    {
      icon: "💎",
      title: "Values",
      description: "Integrity, innovation, collaboration, and environmental stewardship guide everything we do. We're committed to excellence and making a positive impact on the world."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Two decades of engineering excellence, delivering innovative water infrastructure 
            solutions that power communities and industries across the globe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-grid">
            <div className="story-image-section">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" 
                alt="Our Story"
                className="story-image"
              />
            </div>
            <div className="story-text-section">
              <h2 className="section-title-left">Our Story</h2>
              <p className="story-text">
                Founded in 2005, we began with a simple yet powerful vision: to transform how the world 
                manages its most precious resource—water. What started as a small team of passionate engineers 
                has grown into a global leader in water infrastructure solutions.
              </p>
              <p className="story-text">
                Over the past two decades, we've delivered more than 1,000 projects across 30+ countries, 
                serving millions of people and countless industries. Our expertise spans municipal water systems, 
                industrial applications, and cutting-edge automation technologies.
              </p>
              <p className="story-text">
                Today, we stand at the forefront of innovation, combining traditional engineering excellence 
                with advanced technologies like AI, IoT, and smart systems to create sustainable solutions 
                for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section">
        <div className="mvv-container">
          <h2 className="section-title">Mission, Vision & Values</h2>
          <div className="mvv-grid">
            {values.map((value, index) => (
              <div key={index} className="mvv-card">
                <div className="mvv-icon">{value.icon}</div>
                <h3 className="mvv-title">{value.title}</h3>
                <p className="mvv-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-container">
          <h2 className="section-title">Leadership Team</h2>
          <p className="section-description">
            Our executive team brings decades of combined experience in engineering, technology, 
            and sustainable infrastructure development.
          </p>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image-wrapper">
                  <img src={leader.image} alt={leader.name} className="leader-image" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;