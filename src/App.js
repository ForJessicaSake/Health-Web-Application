import firebase from './firebase';

import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UseFetch from './UseFetch.Js';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Conditions from './Components/Conditions';
import Services from './Components/Services';
import Contact from './Components/Contact';

const stateContext = createContext();

function App() {

const {error, loading, data} = UseFetch('https://database')

  return (
    <section className="App">
      <stateContext.Provider value ={{error, loading, data}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path= '/about' element = {<About/>}/>
          <Route path = '/conditions' element = {<Conditions/>}/>
          <Route path = '/services' element = {<Services/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
      </Router>
      </stateContext.Provider>
    </section>
  );
}

export default App;
