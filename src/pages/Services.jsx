import { useState } from "react";
import "../css/Services.css";

function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Project Management",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      shortDesc: "Comprehensive oversight from conception to completion",
      fullDesc: "Our project management services provide end-to-end oversight, ensuring your infrastructure projects are delivered on time, within budget, and to the highest quality standards. We coordinate all stakeholders, manage risks, and maintain clear communication throughout the project lifecycle.",
      features: [
        "Strategic Planning & Feasibility Studies",
        "Risk Assessment & Mitigation",
        "Budget Management & Cost Control",
        "Quality Assurance & Compliance",
        "Stakeholder Coordination",
        "Timeline Management & Reporting"
      ]
    },
    {
      id: 1,
      title: "Water Treatment Systems",
      image: "https://images.squarespace-cdn.com/content/v1/64cc1c1774e9c62c74a6e61b/7d8d36fb-b461-4cec-83ed-158a29b94700/Watertreatment.jpeg",
      shortDesc: "Advanced solutions for clean water delivery",
      fullDesc: "We design, implement, and maintain state-of-the-art water treatment systems that ensure safe, reliable water supply for communities and industries. Our solutions incorporate the latest technologies in filtration, purification, and distribution.",
      features: [
        "Drinking Water Treatment Plants",
        "Wastewater Treatment Facilities",
        "Industrial Water Recycling",
        "Desalination Systems",
        "Distribution Network Design",
        "Water Quality Monitoring"
      ]
    },
    {
      id: 2,
      title: "Infrastructure Development",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      shortDesc: "Building sustainable foundations for growth",
      fullDesc: "We develop critical infrastructure that supports economic growth and improves quality of life. From roads and bridges to utilities and public facilities, our team delivers projects that stand the test of time.",
      features: [
        "Civil Engineering & Construction",
        "Transportation Infrastructure",
        "Utility Networks & Systems",
        "Public Facilities Development",
        "Urban Planning & Design",
        "Sustainable Infrastructure Solutions"
      ]
    },
    {
      id: 3,
      title: "Environmental Compliance",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      shortDesc: "Ensuring sustainability and regulatory adherence",
      fullDesc: "Our environmental compliance services help organizations meet regulatory requirements while minimizing environmental impact. We conduct assessments, develop management plans, and implement monitoring systems to ensure ongoing compliance.",
      features: [
        "Environmental Impact Assessments",
        "Regulatory Compliance Management",
        "Emissions & Discharge Monitoring",
        "Environmental Management Systems",
        "Sustainability Reporting",
        "Remediation & Restoration"
      ]
    },
    {
      id: 4,
      title: "Technical Consulting",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      shortDesc: "Expert guidance for complex challenges",
      fullDesc: "Our technical consulting team provides specialized expertise to solve complex engineering and operational challenges. We offer strategic advice, technical analysis, and innovative solutions tailored to your specific needs.",
      features: [
        "Engineering Analysis & Design",
        "Technology Selection & Integration",
        "Operational Optimization",
        "Capacity Building & Training",
        "Due Diligence & Audits",
        "Strategic Planning & Advisory"
      ]
    },
    {
      id: 5,
      title: "Operations & Maintenance",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      shortDesc: "Reliable performance through expert care",
      fullDesc: "We provide comprehensive operations and maintenance services to ensure your facilities operate at peak efficiency. Our experienced teams deliver proactive maintenance, rapid response to issues, and continuous performance optimization.",
      features: [
        "Facility Operations Management",
        "Preventive Maintenance Programs",
        "Emergency Response Services",
        "Performance Monitoring & Analytics",
        "Asset Management",
        "Spare Parts & Supply Management"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Active Projects"},
    { number: "50+", label: "Countries"},
    { number: "98%", label: "Client Satisfaction"},
    { number: "24/7", label: "Support Available"}
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive solutions for water infrastructure and project management excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="service-card-header">
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-short-desc">{service.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details-section">
        <div className="details-container">
          <div className="details-image">
            <img src={services[activeService].image} alt={services[activeService].title} />
            <div className="image-overlay">
            </div>
          </div>
          <div className="details-content">
            <h2 className="details-title">{services[activeService].title}</h2>
            <p className="details-description">{services[activeService].fullDesc}</p>
            <div className="features-list">
              <h3 className="features-heading">Key Features</h3>
              <div className="features-grid">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet">▸</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Discovery & Assessment</h3>
              <p className="step-description">
                We begin by understanding your needs, challenges, and objectives through comprehensive consultation and site assessments.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Planning & Design</h3>
              <p className="step-description">
                Our experts develop detailed plans and designs, incorporating best practices and innovative solutions tailored to your project.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Implementation</h3>
              <p className="step-description">
                We execute the project with precision, maintaining quality standards while managing timelines and budgets effectively.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Support & Optimization</h3>
              <p className="step-description">
                Post-implementation, we provide ongoing support, monitoring, and optimization to ensure sustained performance and value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;