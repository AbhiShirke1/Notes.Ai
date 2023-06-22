import React from 'react'
import Carousel from "./components/Carousel/Carousel";
import Notescard from "./components/FolderList/Notescard";
import Sidebar from "./components/Sidebar/Sidebar";
import AddFolder from './components/AddFolder/AddFolder';
import Navbar from './components/Navbar/Navbar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';



const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Footer/>
    </>

  )
}

export default Home