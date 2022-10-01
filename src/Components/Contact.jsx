
import React from 'react'
import { FaInstagram,FaLinkedinIn,FaGithub,FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
       <div className='contactPage'>
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
            className='contactCard'>
                    <div className='contactCardText'>
                      <motion.span
                        transition={{duration:2}}
                        initial={{
                          opacity:0,
                          scale:0.2
                      }}
                      animate={{
                          opacity:1,
                          scale:1,
                      }}
                      exit={{
                          opacity:1
                      }} 
                      >Contact Me</motion.span>
                      <form action="https://formsubmit.co/62057ea7c5d7b6ebb2a642e18d1fc840" method="POST">
                        <input className="contactInput" type="text" name="name" placeholder="Name" required/>
                        <input className="contactInput"  type="email" name="email" placeholder='Email' required/>
                        <textarea className="contactInput" placeholder="Message"/>
                        <button type="submit" className='formSubmit'>Send</button>
                    </form>
                      <div className='contactSocials'>
                        <a href="https://www.instagram.com/notrishiraj/"><FaInstagram/></a>
                        <a href="https://www.linkedin.com/in/rishi-raj-a36930206/"><FaLinkedinIn/></a>
                        <a href="https://github.com/Rishi1314"><FaGithub/></a>
                        <a href="https://twitter.com/Yuishirin"><FaTwitter/></a>
                
                  
                    </div>
                    </div>
                    
              
            </motion.div>
            <div></div>
        </div>
    </motion.div>
  )
}

export default Contact