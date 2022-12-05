import About from "./components/About/About";
import AboutMore from "./components/AboutMore/AboutMore";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar"
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const[nopen, setnopen]=useState(false)

  return (
    <Router>
      <div className="app">    
        <Navbar nopens={nopen} setnopens={setnopen}/>
        <Menu nopens={nopen} setnopens={setnopen}/>
          <Switch>  
            <Route path="/" exact component={Home} />
            <Route path="/Aboutmore" component={AboutMore} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
