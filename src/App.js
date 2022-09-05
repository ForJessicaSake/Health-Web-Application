import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Conditions from './Components/Conditions';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {

  return (
    <section className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/conditions' element={<Conditions />} />
          <Route path="/services" element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
