import { useState } from "react";
import "../css/Capabilities.css";

function Capabilities() {
  const [activeToolCategory, setActiveToolCategory] = useState("all");

  const tools = [
    // Design & CAD Software
    { name: "AutoCAD", category: "design", logo: "https://images.seeklogo.com/logo-png/48/2/autocad-logo-png_seeklogo-482394.png"},
    { name: "Revit", category: "design", logo: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/f361f281-6ee1-4167-b713-03a101a4a914.png"},
    { name: "SolidWorks", category: "design", logo: "https://plmgroup.eu/wp-content/uploads/SW-300x277.png" },
    
    // Electronics & PCB
    { name: "Altium Designer", category: "electronics", logo: "https://cpe.ifmo.ru/public/nodes/97/2a/67/35/altium_logo.png"},
    { name: "KiCAD", category: "electronics", logo: "https://avatars.githubusercontent.com/u/3374914?s=200&v=4"},
    { name: "OrCAD", category: "electronics", logo: "https://www.ema-eda.com/wp-content/uploads/2022/08/Capture_CIS.png"},
    { name: "Autodesk Eagle", category: "electronics", logo: "https://yt3.googleusercontent.com/ytc/AIdro_k0PX-rjirYWUlIJb9VirExih3WZORCbFVbS2X0yhR3D7o=s900-c-k-c0x00ffffff-no-rj"},
    { name: "Proteus", category: "electronics", logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png"},
    
    // Analysis & Simulation
    { name: "ANSYS", category: "analysis", logo: "https://media.zenfs.com/en/us.finance.gurufocus/fc79103132ebef2e7866d3cb391f06ac"},
    { name: "MATLAB", category: "analysis", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"},
    { name: "EPANET", category: "analysis", logo: "https://www.it.unlv.edu/sites/default/files/styles/250_width/public/sites/default/files/assets/software/logos/epa_0.png?itok=EFgWlKGH"},
    { name: "SWMM", category: "analysis", logo: "https://www.it.unlv.edu/sites/default/files/styles/250_width/public/sites/default/files/assets/software/logos/epa.png?itok=8If6biwc"},
    { name: "SAP2000", category: "analysis", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdE70jA9iwSC439r5BOcD0qBxnfTZJwj71Jg&s"},
    { name: "ETABS", category: "analysis", logo: "https://hlc.so/wp-content/uploads/2023/10/etabs.png"},
    { name: "HEC-RAS", category: "analysis", logo: "https://www.hec.usace.army.mil/confluence/download/attachments/206325540/RASR?version=2&modificationDate=1726699086769&api=v2"},
    
    // PLC & Automation
    { name: "Siemens TIA Portal", category: "automation", logo: "https://inetec.com.br/wp-content/uploads/2023/03/TIA-PORTAL-V18.png"},
    { name: "Studio 5000", category: "automation", logo: "https://plcsolucoes.com/wp-content/uploads/2024/11/studio5000-2.jpg"},
    { name: "RSLogix", category: "automation", logo: "https://vohauipr.com/wp-content/uploads/2024/10/RSlogix500.png"},
    { name: "CODESYS", category: "automation", logo: "https://images.eaton.com/mdmfiles/contentId/SW-XSOFT-CODESYS-3-S/600x600_96dpi"},
    { name: "Wonderware", category: "automation", logo: "https://cdn.freebiesupply.com/logos/large/2x/wonderware-1-logo-png-transparent.png"},
    
    // Enterprise & Management
    { name: "1C:Enterprise", category: "enterprise", logo: "https://yt3.googleusercontent.com/ytc/AIdro_mZ3dqJadDATMTTSpythQtxF6GEbOeGTuot05uJ6Hl2KA=s900-c-k-c0x00ffffff-no-rj"},
    { name: "SAP", category: "enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png"},
    { name: "Microsoft Project", category: "enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/MS_Project_Logo.png"},
    { name: "Primavera P6", category: "enterprise", logo: "https://play-lh.googleusercontent.com/z87Px8yV2bVg3QHSIXWUxsitJidAugYKpXIiL2vaKaKe-3TjaEAPSj4bnFNWTLU22oja"},
    { name: "Atlassian", category: "enterprise", logo: "https://logos-world.net/wp-content/uploads/2023/03/Atlassian-Logo.png" },

    // Programming Languages
    { name: "Python", category: "programming", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"},
    { name: "C++", category: "programming", logo: "https://e7.pngegg.com/pngimages/646/751/png-clipart-the-c-programming-language-computer-programming-programmer-others-blue-class-thumbnail.png"},
    { name: "Embedded C", category: "programming", logo: "https://user-images.githubusercontent.com/17773218/56295546-32a81200-60ea-11e9-8761-0b726b20fd51.png"},
    { name: "C#", category: "programming", logo: "https://e7.pngegg.com/pngimages/210/105/png-clipart-c-c-computer-programming-javascript-others-miscellaneous-purple-thumbnail.png"},
    { name: "Java", category: "programming", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"},
    { name: "JavaScript", category: "programming", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},
    { name: "React", category: "programming", logo: "https://images.icon-icons.com/2108/PNG/512/react_icon_130845.png"},
    { name: "Assembly x86", category: "programming", logo: "https://i.pinimg.com/736x/25/a8/5d/25a85d9e5057430d82273a3c75e73014.jpg"},
    { name: "Lua", category: "programming", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png"}
  ];


  const toolCategories = [
    { id: "all", label: "All Tools" },
    { id: "design", label: "Design & CAD" },
    { id: "electronics", label: "PCB & Electronics" },
    { id: "analysis", label: "Analysis & Simulation" },
    { id: "automation", label: "PLC & Automation" },
    { id: "enterprise", label: "Enterprise Systems" },
    { id: "programming", label: "Programming" }
  ];

  const filteredTools = activeToolCategory === "all" ? tools : tools.filter(t => t.category === activeToolCategory);

  return (
    <div className="industries-page">
        <section className="industries-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Capabilities</h1>
          <p className="hero-subtitle">
            Delivering specialized water infrastructure and engineering solutions across diverse sectors worldwide
          </p>
        </div>
      </section>
      <section className="technical-section">
        <div className="technical-container">
          <div className="tool-categories">
            {toolCategories.map((category) => (
              <button
                key={category.id}
                className={`tool-category-btn ${activeToolCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveToolCategory(category.id)}
              >
                <span className="tool-cat-label">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="tools-grid">
            {filteredTools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-logo-wrapper">
                  <img src={tool.logo} alt={tool.name} className="tool-logo-img" />
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="technical-footer">
            <div className="footer-box">
              <h3 className="footer-box-title">Certified Expertise</h3>
              <p className="footer-box-text">
                Our team maintains current certifications across all major platforms including Autodesk, 
                Siemens, Rockwell Automation, and ANSYS, ensuring optimal implementation and support.
              </p>
            </div>
            <div className="footer-box">
              <h3 className="footer-box-title">Custom Development</h3>
              <p className="footer-box-text">
                Beyond standard tools, we develop custom solutions using modern programming languages 
                and frameworks to address unique project requirements and optimize workflows.
              </p>
            </div>
            <div className="footer-box">
              <h3 className="footer-box-title">Continuous Innovation</h3>
              <p className="footer-box-text">
                We stay at the forefront of technology, continuously evaluating and adopting new tools 
                and methodologies to deliver cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Capabilities;