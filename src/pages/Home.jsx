import "../css/Home.css"
import InfoCarousel from "../components/Home/InfoCarousel/InfoCarousel"
import OurIntro from "../components/Home/OurIntro/OurIntro"
import SendAMessage from "../components/Home/SendAMessage/SendAMessage"
import MissionSection from "../components/Home/MissionSection/MissionSection"

function HomePage(){
    return(
        <>
        <section className="hero-section">
            <div className="hero-content">
                <h1>Global Expertise. Uncompromising Quality.</h1>
                <ul>
                    <li>
                        Management
                    </li>
                    <li>
                        R&D
                    </li>
                    <li>
                        Assesments
                    </li>
                </ul>

            </div>
        </section>

        <InfoCarousel />
        <OurIntro />
        <MissionSection />
        <SendAMessage />
        </>
)}

export default HomePage