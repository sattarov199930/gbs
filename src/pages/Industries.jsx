import { useState, useRef, useEffect } from "react";
import "../css/Industries.css";

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [scrollerStyle, setScrollerStyle] = useState({});
  const menuRefs = useRef([]);

  const industries = [
    {
      id: 0,
      title: "Waste",
      image: "https://media.istockphoto.com/id/505176828/photo/water-treatment-plant-at-sunset.webp?s=2048x2048&w=is&k=20&c=cNDhmbKSUQFKaTBtNPuOjj9wsMTS1hNeFzKojtwBlBI=",
      description: "We deliver comprehensive water treatment and distribution solutions for municipalities worldwide. Our expertise spans drinking water treatment plants, wastewater facilities, and distribution networks that serve millions of people daily.",
      capabilities: [
        "Water Treatment Plant Design & Implementation",
        "Wastewater Management Systems",
        "Smart Water Distribution Networks",
        "SCADA & Control Systems Integration",
        "Asset Management & Optimization",
        "Regulatory Compliance & Reporting"
      ],
      stats: { projects: "150+", capacity: "500M L/day", cities: "75+" }
    },
    {
      id: 1,
      title: "Water & Utilities",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      description: "Supporting manufacturing operations with process water systems, industrial wastewater treatment, and facility infrastructure. We optimize water usage, reduce costs, and ensure environmental compliance for industrial clients.",
      capabilities: [
        "Process Water Treatment & Recycling",
        "Industrial Wastewater Solutions",
        "Cooling Tower & Boiler Systems",
        "Zero Liquid Discharge Systems",
        "Process Automation & Control",
        "Energy Efficiency Optimization"
      ],
      stats: { projects: "200+", facilities: "120", savings: "40%" }
    },
    {
      id: 2,
      title: "Health",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      description: "Providing critical water infrastructure for power generation facilities including thermal, nuclear, and renewable energy plants. Our solutions ensure reliable operations and environmental stewardship.",
      capabilities: [
        "Cooling Water Systems Design",
        "Water Quality Management",
        "Demineralization & Treatment",
        "Environmental Compliance Systems",
        "Chemical Treatment Programs",
        "Thermal Discharge Management"
      ],
      stats: { projects: "85+", capacity: "15GW", plants: "50+" }
    },
    {
      id: 3,
      title: "Rural Development",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      description: "Developing efficient irrigation systems and agricultural water management solutions that maximize crop yields while conserving water resources. Our technology-driven approach supports sustainable farming practices.",
      capabilities: [
        "Precision Irrigation Systems",
        "Water Resource Management",
        "Soil Moisture Monitoring",
        "Fertigation Systems Design",
        "Automated Control Systems",
        "Water Conservation Strategies"
      ],
      stats: { projects: "180+", area: "50K hectares", efficiency: "35%" }
    },
    {
      id: 4,
      title: "Education",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      description: "Designing and implementing building water systems for commercial complexes, residential developments, and mixed-use projects. We ensure reliable water supply, efficient usage, and sustainable operations.",
      capabilities: [
        "Building Water System Design",
        "Plumbing & Distribution Networks",
        "Rainwater Harvesting Systems",
        "Greywater Recycling",
        "Fire Protection Systems",
        "Smart Building Water Management"
      ],
      stats: { projects: "300+", buildings: "500+", residents: "1M+" }
    },
    {
      id: 5,
      title: "Urban Planning",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      description: "Supporting major infrastructure projects with comprehensive water and wastewater solutions. From highways to transit systems, we deliver the essential utilities that keep infrastructure functioning.",
      capabilities: [
        "Highway Drainage Systems",
        "Tunnel Water Management",
        "Transit Facility Water Systems",
        "Stormwater Management",
        "Pumping Stations Design",
        "Infrastructure Asset Management"
      ],
      stats: { projects: "120+", length: "2000km", stations: "150+" }
    },
    {
      id: 6,
      title: "Finance",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      description: "Supporting major infrastructure projects with comprehensive water and wastewater solutions. From highways to transit systems, we deliver the essential utilities that keep infrastructure functioning.",
      capabilities: [
        "Highway Drainage Systems",
        "Tunnel Water Management",
        "Transit Facility Water Systems",
        "Stormwater Management",
        "Pumping Stations Design",
        "Infrastructure Asset Management"
      ],
      stats: { projects: "120+", length: "2000km", stations: "150+" }
    },
    {
      id: 7,
      title: "Industrial Automation",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      description: "Supporting major infrastructure projects with comprehensive water and wastewater solutions. From highways to transit systems, we deliver the essential utilities that keep infrastructure functioning.",
      capabilities: [
        "Highway Drainage Systems",
        "Tunnel Water Management",
        "Transit Facility Water Systems",
        "Stormwater Management",
        "Pumping Stations Design",
        "Infrastructure Asset Management"
      ],
      stats: { projects: "120+", length: "2000km", stations: "150+" }
    },
    {
      id: 8,
      title: "R&D",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      description: "Supporting major infrastructure projects with comprehensive water and wastewater solutions. From highways to transit systems, we deliver the essential utilities that keep infrastructure functioning.",
      capabilities: [
        "Highway Drainage Systems",
        "Tunnel Water Management",
        "Transit Facility Water Systems",
        "Stormwater Management",
        "Pumping Stations Design",
        "Infrastructure Asset Management"
      ],
      stats: { projects: "120+", length: "2000km", stations: "150+" }
    }
  ];

  /*Menu Sroller animation*/
  useEffect(() => {
    const activeElement = menuRefs.current[activeIndustry];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setScrollerStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`
      });
    }
  }, [activeIndustry]);

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="hero-content">
          <h1 className="hero-title">Industries We Serve</h1>
          <p className="hero-subtitle">
            Delivering specialized water infrastructure and engineering solutions across diverse sectors worldwide
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="industries-overview">
        <div className="overview-container-full">
          <h2 className="section-title">Our Expertise Across Sectors</h2>
          <div className="industries-menu-wrapper">
            <div className="industries-menu">
              {industries.map((industry, index) => (
                <div key={`menu-${industry.id}`} style={{display: 'contents'}}>
                  <div
                    ref={el => menuRefs.current[index] = el}
                    className={`industry-menu-item ${activeIndustry === industry.id ? 'active' : ''}`}
                    onClick={() => setActiveIndustry(industry.id)}
                  >
                    <h3 className="menu-item-title">{industry.title}</h3>
                  </div>
                  {index < industries.length - 1 && (
                    <span className="menu-separator">•</span>
                  )}
                </div>
              ))}
              <div className="menu-scroller" style={scrollerStyle}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="industry-details">
        <div className="details-wrapper">
          <div className="details-grid">
            <div className="details-image-section">
              <img 
                src={industries[activeIndustry].image} 
                alt={industries[activeIndustry].title}
                className="industry-detail-image"
              />
            </div>
            <div className="details-text-section">
              <h2 className="industry-detail-title">{industries[activeIndustry].title}</h2>
              <p className="industry-detail-description">{industries[activeIndustry].description}</p>
              
              <div className="industry-stats-bar">
                {Object.entries(industries[activeIndustry].stats).map(([key, value], index) => (
                  <div key={index} className="stat-item-inline">
                    <span className="stat-value">{value}</span>
                    <span className="stat-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </div>
                ))}
              </div>

              <div className="capabilities-section">
                <h3 className="capabilities-heading">Core Capabilities</h3>
                <div className="capabilities-grid">
                  {industries[activeIndustry].capabilities.map((capability, index) => (
                    <div key={index} className="capability-item">
                      <span className="capability-check">✓</span>
                      <span className="capability-text">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;