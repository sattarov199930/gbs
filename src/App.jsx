/* -------------------------------------------------------------------------- */
/*                          Standard React functions                          */
/* -------------------------------------------------------------------------- */
import { Routes, Route } from 'react-router-dom'

/* -------------------------------------------------------------------------- */
/*                           User Components Import                           */
/* -------------------------------------------------------------------------- */
import MainNavBar   from './components/NavBar/Navbar';
import Footer       from './components/Footer/Footer';

import HomePage     from './pages/Home';
import Careers      from './pages/Careers';
import Customers    from './pages/Customers';
import Industries   from './pages/Industries';
import Locations    from './pages/Locations';
import Services     from './pages/Services';
import AboutUs      from './pages/AboutUs';
import Contact      from './pages/Contact';
import Capabilities from './pages/Capabilities';

/* -------------------------------------------------------------------------- */
/*                              Main App Function                             */
/* -------------------------------------------------------------------------- */
function App() {
  console.log("App loaded");

  return (
    <div>
      <MainNavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/"             element={<HomePage    />} />
          <Route path="/Capabilities" element={<Capabilities/>} />
          <Route path="/Careers"      element={<Careers     />} />
          <Route path="/Customers"    element={<Customers   />} />
          <Route path="/Industries"   element={<Industries  />} />
          <Route path="/Locations"    element={<Locations   />} />
          <Route path="/Services"     element={<Services    />} />
          <Route path="/AboutUs"      element={<AboutUs     />} />
          <Route path="/Contact"      element={<Contact     />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
