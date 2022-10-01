import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location=useLocation();
  return (
    <AnimatePresence><Routes location={location} key={location.path}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contacts" element={<Contact/>}/>
    </Routes></AnimatePresence>
    
  )
}

export default AnimatedRoutes