import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import Aboutme from './components/pages/Aboutme';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path= '/' exact component={Home} />
          <Route path= '/portfolio' exact component={Portfolio} />
          <Route path= '/projects' exact component={Projects} />
          <Route path= '/contacts' exact component={Contacts} />
          <Route path= '/aboutme' exact component={Aboutme} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
