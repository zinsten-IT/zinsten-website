
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Home from './Components/Home';
import About from './Components/about';
import Service from './Components/Services';
import Footer from './Components/Footer';
import Consultation from './Components/consultation';
import OurTeam from './Components/OurTeam';
import Testimonial from './Components/Testimonial';
import Brand from './Components/Brand';
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
        <Header />
        
      <Home />
      <About />
      <Service />
      <Consultation />
      <OurTeam />
      <Testimonial />
      <Brand />
      <Footer />
      <Contact/>
      <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      

    </div >
  );
}

export default App;
