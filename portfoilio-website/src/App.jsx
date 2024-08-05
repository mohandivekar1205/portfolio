import { useState } from 'react'
import './App.css'

import Navbar from './section/NavigationBar';
import Intro from './section/Introduction';
import Projects from './section/Projects';
import Skill from './section/Skill';
import Education from './section/Education';
import Footer from './section/Footer';
import Certification from './section/Certification';

function App() {

  return (
    <>
    <Navbar/>
    <Intro/>
    <Projects/>
    <Skill/>
    <Education/>
    <Certification/>
    <Footer/>
    </>
  )
}

export default App
