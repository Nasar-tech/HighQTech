import React from 'react'
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Carosule from "./components/Carosule";
import Aboutus from "./components/Aboutus";
import OurServices from "./components/OurServices";
import ImageGallery from "./components/ImageGallery";
import AfterImageG from "./components/AfterImageG";
import Footer from './components/Footer';


import "./App.css";



function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Carosule />
      <Aboutus />
      <OurServices />
      <ImageGallery />
      <AfterImageG />
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App
