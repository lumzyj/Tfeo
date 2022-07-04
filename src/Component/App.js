import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Nav from './Nav'
import {Route, Routes } from "react-router-dom"

function App() {
  return (
  
    <div className="App">
      <Nav />
      <Routes>
    <Route path ="/" element={<Home />} />
    <Route path ="/about" element={<About />} />
    <Route path ="/services" element={<Services />} />
    <Route path ="/contact" element={<Contact />} />
    </Routes>
    </div>

  
  );
}

export default App;
