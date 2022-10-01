import React from 'react'
import { useRef } from 'react';
import "../App.css"
import { motion } from 'framer-motion';
import { FaInstagram,FaLinkedinIn,FaGithub,FaTwitter } from "react-icons/fa";


const Navbar = () => {
    const navRef=useRef();
    const menuRef1=useRef();
    const menuRef2=useRef();
    const menuRef3=useRef();
    const menuRef=useRef();
    function showNav(){
        navRef.current.classList.toggle("showNav");
        menuRef1.current.classList.toggle("line1");
        menuRef2.current.classList.toggle("line2");
        menuRef3.current.classList.toggle("line3");
        menuRef.current.classList.toggle("noGap")

    }

  return (
    <>  
    
        <header>
            <div className='navbar'>
                <motion.div
                transition={{duration:1}}
                    initial={{
                        x:-500,
                        opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        x:0,
                        opacity:1,
                        scale:1,
                    }}
                    exit={{
                        x:-500
                    }} 
                    className='logoName'>
                        <a href="/">{"< "}R i s h i{" />"}</a>
                        </motion.div>
                
                <button className="nav-open-butt"onClick={showNav}>
                    <motion.div 
                    transition={{duration:1.5}}
                    initial={{
                        x:500,
                        opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        x:0,
                        opacity:1,
                        scale:1,
                    }}
                    exit={{
                        x:500
                    }} 
                    className='hamburger' ref={menuRef}>
                        <div className='hamburgerLine1' ref={menuRef1}></div>
                        <div className='hamburgerLine2' ref={menuRef2}></div>
                        <div className='hamburgerLine3' ref={menuRef3}></div>
                    </motion.div>
                </button>
                </div>
                <nav ref={navRef}>
                    <motion.a whileHover={{scale:1.5}} href="/">Home</motion.a>
                    <motion.a whileHover={{scale:1.5}} href="/about">About Me</motion.a>
                    {/* <a href="/project">Projects</a> */}
                    <motion.a whileHover={{scale:1.5}} href="/contacts">Contact Me</motion.a>
                    <div className='homeSocials'>
                        <a href="https://www.instagram.com/notrishiraj/"><FaInstagram/></a>
                        <a href="https://www.linkedin.com/in/rishi-raj-a36930206/"><FaLinkedinIn/></a>
                        <a href="https://github.com/Rishi1314"><FaGithub/></a>
                        <a href="https://twitter.com/Yuishirin"><FaTwitter/></a>
                
                  
                    </div>
                </nav>
                
        </header>
    </>
  )
}

export default Navbar