

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import ScrollIndicator from './ScrollIndicator';
import CarrierSetupForm from './CarrierSetupForm'
import Realcontact from './realcontact';
import BlogPage from './BlogPage';
import ReadMoreBlog from './ReadMoreBlog';

function App() {
  return (
    <div
      className="App"

    >
      
     { <Router>
           <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CarrierSetupForm" element={<CarrierSetupForm/>} />
        <Route path="/realcontact" element={<Realcontact/>} />
        <Route path="/BlogPage" element={<BlogPage/>} />
        <Route path="/ReadMoreBlog" element={<ReadMoreBlog/>} />
      </Routes>
    </Router>
      }
      
      
    </div>
  );
}

export default App;
