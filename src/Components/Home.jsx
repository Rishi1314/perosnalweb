import React from 'react'
import "../App.css"
import lottie from "lottie-web";
import mainGuy from "../Assets/Animations/frontpageguy.json"
import { Center } from '@chakra-ui/react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import res from "./rishi.pdf"




const Home = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
    container: document.querySelector("#react-logo1"),
    animationData:mainGuy,
    renderer: "svg", // "canvas", "html"
    loop: true, // boolean
    autoplay: true, // boolean
    });
  }, []);
  return (
    <motion.div className='Home'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
  
        <div className='heroScreen'>
          <Center className="heroText">
            <motion.div
            transition={{duration:1}}
            initial={{
             
             opacity:0,
             scale:0.8
         }}
         animate={{
             
             opacity:1,
             scale:1,
         }}
         exit={{
             opacity:0
         }} ><ul>
              
              <li><span className='heroTextLine1'>Hey there, i am <span className='name'>Rishi Raj</span></span></li>
              <li><span className='heroTextLine2'> 
              <span style={{ color: 'red'}} className='heroTextLine2'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Creative Developer', ' Student', ' Programmer', ' Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></span></li>
              <li>
                <div className='heroButtons'>
                  
                    <button className='buttonResume'>
                    <h1><a href={res} download> Resume</a></h1></button>
                  <Link to="/contacts"><button className='buttonContact'><h1>Contact Me</h1></button></Link>
                  
                </div>
              </li>
            </ul></motion.div>
            
            
          </Center>
          
          <Center>
            <motion.div 
            transition={{duration:1}}
             initial={{
              
              opacity:0,
              scale:0.8
          }}
          animate={{
              
              opacity:1,
              scale:1,
          }}
          exit={{
              opacity:0
          }} id="react-logo1" className="main-page-svg"></motion.div>
          </Center>
          {/* <div className='circleMela'>
          <div className='circle1'></div>
          <div className='circle2'></div>
          </div> */}

          {/* <div className='heroPic'>
            <img src={mypic} alt="" />
          </div> */}
               {/* <motion.div 
               transition={{duration:1}}
                initial={{x:-500}}
                animate={{x:0}}
                exit={{x:500}}
                
               className='circle1 circleout'/>
               <motion.div 
               transition={{duration:1}}
               initial={{x:-500}}
               animate={{x:0}}
               exit={{x:500}}
               className='circle1 circlein'/>
               <motion.div transition={{duration:1}}
                initial={{x:-500}}
                animate={{x:0}}
                exit={{x:500}}className='circle2 circleout'/>
               <motion.div transition={{duration:1}}
               initial={{x:-500}}
               animate={{x:0}}
               exit={{x:500}}className='circle2 circlein'/>
               <motion.div transition={{duration:1}}
                initial={{x:-500}}
                animate={{x:0}}
                exit={{x:500}}className='circle3 circleout'/>
               <motion.div transition={{duration:1}}
               initial={{x:-500}}
               animate={{x:0}}
               exit={{x:500}}className='circle3 circlein'/> */}
        </div>

    </motion.div>
  )
}

export default Home