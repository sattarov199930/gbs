import { useState } from "react";
import "../css/Careers.css";

function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const positions = [
    {
      id: 1,
      title: "Senior Water Systems Engineer",
      department: "engineering",
      location: "Boston, MA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the design and implementation of municipal water treatment systems. Work with cross-functional teams to deliver innovative solutions."
    },
    {
      id: 2,
      title: "Project Manager - Infrastructure",
      department: "management",
      location: "New York, NY",
      type: "Full-time",
      experience: "7+ years",
      description: "Oversee large-scale water infrastructure projects from conception to completion. Manage client relationships and project teams."
    },
    {
      id: 3,
      title: "Automation Engineer",
      department: "engineering",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement SCADA systems and PLC programming for water treatment facilities. Expertise in Siemens and Rockwell platforms required."
    },
    {
      id: 4,
      title: "Environmental Compliance Specialist",
      department: "compliance",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Ensure all projects meet environmental regulations and standards. Prepare compliance documentation and regulatory filings."
    },
    {
      id: 5,
      title: "CAD Designer",
      department: "design",
      location: "Boston, MA",
      type: "Full-time",
      experience: "2+ years",
      description: "Create detailed engineering drawings and 3D models using AutoCAD and Revit. Support engineering teams with technical documentation."
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "sales",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Identify new business opportunities and build relationships with potential clients. Develop strategic partnerships in the water sector."
    },
    {
      id: 7,
      title: "Junior Hydraulic Engineer",
      department: "engineering",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "0-2 years",
      description: "Support senior engineers in hydraulic modeling and analysis. Opportunity to work on diverse water distribution projects."
    },
    {
      id: 8,
      title: "Quality Assurance Manager",
      department: "management",
      location: "Boston, MA",
      type: "Full-time",
      experience: "6+ years",
      description: "Develop and implement quality control procedures. Lead QA teams to ensure project deliverables meet the highest standards."
    }
  ];

  const departments = [
    { id: "all", label: "All Positions" },
    { id: "engineering", label: "Engineering" },
    { id: "management", label: "Management" },
    { id: "design", label: "Design" },
    { id: "compliance", label: "Compliance" },
    { id: "sales", label: "Sales & Business Development" }
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance-based bonuses and comprehensive benefits packages."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Premium health, dental, and vision insurance. On-site fitness facilities and wellness programs."
    },
    {
      icon: "🎓",
      title: "Professional Development",
      description: "Continuous learning opportunities, certification reimbursement, and conference attendance support."
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      description: "Generous PTO, flexible work arrangements, and hybrid/remote options for eligible positions."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      description: "Parental leave, childcare assistance, and family-friendly policies to support your personal life."
    },
    {
      icon: "💰",
      title: "Retirement Planning",
      description: "401(k) matching program and financial planning resources to secure your future."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex water infrastructure challenges."
    },
    {
      title: "Collaboration",
      description: "Our success is built on teamwork. We foster an environment where diverse perspectives drive better solutions."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality work and exceeding client expectations on every project."
    },
    {
      title: "Sustainability",
      description: "Environmental stewardship is at our core. We design solutions that protect water resources for future generations."
    }
  ];

  const filteredPositions = selectedDepartment === "all" 
    ? positions 
    : positions.filter(p => p.department === selectedDepartment);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1 className="hero-title">Join Our Team</h1>
          <p className="hero-subtitle">
            Build your career with a leader in water infrastructure and engineering solutions. 
            Make an impact on communities worldwide.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="why-join-container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-description">
            We're more than just a workplace—we're a community of passionate professionals dedicated to 
            solving the world's water challenges. Join us and be part of something meaningful.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title">Benefits & Perks</h2>
          <p className="section-description">
            We invest in our people with comprehensive benefits and programs designed to support 
            your professional growth and personal well-being.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <div className="positions-container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-description">
            Explore opportunities across our organization and find the role that matches your skills and aspirations.
          </p>

          <div className="department-filters">
            {departments.map((dept) => (
              <button
                key={dept.id}
                className={`dept-filter-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                {dept.label}
              </button>
            ))}
          </div>

          <div className="positions-grid">
            {filteredPositions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <h3 className="position-title">{position.title}</h3>
                  <span className="position-type">{position.type}</span>
                </div>
                <div className="position-meta">
                  <span className="position-location">📍 {position.location}</span>
                  <span className="position-experience">⏱️ {position.experience}</span>
                </div>
                <p className="position-description">{position.description}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="no-positions">
              <p>No positions available in this category at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="cta-content">
          <h2 className="cta-title">Don't See the Right Role?</h2>
          <p className="cta-text">
            We're always looking for talented individuals to join our team. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <button className="cta-btn">Submit General Application</button>
        </div>
      </section>
    </div>
  );
}

export default Careers;