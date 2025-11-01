import { useNavigate } from "react-router-dom";
import "./SendAMessage.css";

function SendAMessage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return(
    <section className="sendAMessage">
      <div className="cta">
        <h3 className="cta-heading">Ready to Work Together?</h3>
        <p className="cta-text">
          Join the hundreds of organizations that trust us to deliver exceptional results
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started Today
        </button>
      </div>
    </section>
  );
}

export default SendAMessage;