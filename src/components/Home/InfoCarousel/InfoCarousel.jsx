import { useState, useEffect, useRef } from "react";
import "./InfoCarousel.css"

// ==================== CAROUSEL WRAPPER ====================
function InfoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    <ServicesCard key="services" />,
    <IndustriesCard key="industries" />,
    <CustomersCard key="customers" />
  ];

  const totalCards = cards.length;

  /* ----------------------- Auto-scroll every 4 seconds ---------------------- */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000); //Autoscroll time

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, totalCards]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-slide">
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button 
          type="button"
          className="carousel-arrow" 
          onClick={prevCard}
          aria-label="Previous card"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-dots">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToCard(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button 
          type="button"
          className="carousel-arrow" 
          onClick={nextCard}
          aria-label="Next card"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ==================== SERVICES CARD ====================
function ServicesCard() {
  const stats = [
    { number: 50,   label: "IFI Financed Projects" },
    { number: 100,  label: "Clients Worldwide" },
    { number: 10,   label: "Countries of Operation" }
  ];

  return (
    <section className="info-section" style={{'--bg-image': 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80)'}}>
      <div className="card-container">
        <div className="card-side">
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Professional services" />
          </div>
          <div className="card-text">
            <p>We deliver comprehensive management solutions and advanced water treatment systems, combining technical excellence with strategic oversight to ensure project success from conception to completion.</p>
          </div>
        </div>
        <div className="card-side">
          <h2 className="card-title">Services</h2>
          <div className="stats-panel">
            {stats.map((stat, index) => (
              <StatItem key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stat Item Component with Animation
function StatItem({ number, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 1200;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div className="stat-item" ref={statRef}>
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ==================== INDUSTRIES CARD ====================
function IndustriesCard() {
  const industries = [
    "Municipal Water",
    "Industrial Treatment",
    "Energy Sector",
    "Agriculture",
    "Infrastructure"
  ];

  return (
    <section className="info-section" style={{'--bg-image': 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80)'}}>
      <div className="card-container reverse">
        <div className="card-side">
          <h2 className="card-title">Industries</h2>
          <div className="card-text">
            <p>Our expertise spans critical sectors where water management and operational excellence are paramount. From municipal infrastructure to industrial facilities, we bring decades of specialized knowledge in water treatment, environmental compliance, and sustainable resource management. We serve public utilities, manufacturing plants, energy facilities, and agricultural operations, ensuring efficient, compliant, and future-ready water systems.</p>
            <div className="tag-list">
              {industries.map((industry, index) => (
                <span key={index} className="tag">{industry}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-side">
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Industries we serve" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CUSTOMERS CARD ====================
function CustomersCard() {
  const [activeCustomer, setActiveCustomer] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const timeoutRef = useRef(null);

  const customers = [
    { 
      id: 1, 
      name: "World Bank", 
      logo: "🏦",
      description: "Partnered on sustainable infrastructure projects across emerging markets, delivering clean water solutions to over 2 million people."
    },
    { 
      id: 2, 
      name: "Asian Development Bank", 
      logo: "🏛️",
      description: "Collaborated on regional water treatment facilities, supporting economic growth and environmental sustainability in Southeast Asia."
    },
    { 
      id: 3, 
      name: "European Investment Bank", 
      logo: "🇪🇺",
      description: "Implemented cutting-edge management systems for large-scale water infrastructure projects across the European Union."
    },
    { 
      id: 4, 
      name: "International Finance Corp", 
      logo: "💼",
      description: "Provided technical expertise for private sector water treatment initiatives, ensuring long-term operational excellence."
    },
    { 
      id: 5, 
      name: "EBRD", 
      logo: "🌍",
      description: "Delivered comprehensive project management services for water infrastructure development in Central and Eastern Europe."
    }
  ];

  const defaultText = "Trusted by leading international financial institutions and development organizations worldwide. Hover over a logo to learn more about our partnership.";

  useEffect(() => {
    if (activeCustomer) {
      const description = customers.find(c => c.id === activeCustomer)?.description;
      setDisplayText(description);
    } else {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Wait 1 second before showing default text
      timeoutRef.current = setTimeout(() => {
        setDisplayText(defaultText);
      }, 200);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeCustomer]);

  // Set initial text on mount
  useEffect(() => {
    setDisplayText(defaultText);
  }, []);

  return (
    <section className="info-section">
      <div className="card-container column">
        <h2 className="card-title centered">Our Customers</h2>
        <div className="logo-grid">
          {customers.map(customer => (
            <div 
              key={customer.id}
              className={`logo-item ${activeCustomer === customer.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCustomer(customer.id)}
              onMouseLeave={() => setActiveCustomer(null)}
            >
              <span className="logo-icon">{customer.logo}</span>
              <span className="logo-name">{customer.name}</span>
            </div>
          ))}
        </div>
        <div className="content-box">
          <p key={displayText}>{displayText}</p>
        </div>
      </div>
    </section>
  );
}

export default InfoCarousel;