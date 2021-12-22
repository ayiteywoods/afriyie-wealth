import React from 'react';
import './App.css';
import TopNav from './components/inc/TopNav';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Portfolio from './components/pages/Portfolio';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Footer from './components/inc/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    
      <Router>
      <TopNav />
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/service'>
            <Service />
          </Route>

          <Route path='/portfolio'>
            <Portfolio/>
          </Route>

          <Route path='/gallery'>
            <Gallery />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

        </Switch>
        <Footer />
      
      </Router>
      

    
  );
}

export default App;
