import React, { useState } from 'react'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Service from './Components/Service';
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact'
import Main from './Components/Main';
import 'remixicon/fonts/remixicon.css';
import SignUp from './Components/signUp';
import Footer from './Components/Footer';
import Abouts from './Components/Abouts';
import Services from './Components/Services';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/Home" exact element={<Main />} />
        <Route path="/abouts" element={<Abouts/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />


    </div >
  );
}

export default App;
