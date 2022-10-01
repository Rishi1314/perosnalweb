import { Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import me2 from "../Assets/Icons/me2.jpg"
import me1 from "../Assets/Icons/me1.jpg"




const About = () => {
  const [pic, setpic] = useState(me2)
  const [num,setnum]=useState(0)

  const forPic=()=>{
      var temp=num
      if(temp===0){
        setpic(me1)
        setnum(temp+1)
      }else{
        setpic(me2)
        setnum(temp-1)
      }
    }
  
 
  
  return (
    <motion.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
    <Center>
      <motion.div  initial={{y:-500,opacity:0.5}} animate={{y:0,opacity:1}} exit={{y:-500}} transition={{delay:1,duration:2}} className='pageTitle' style={{display:"flex",flexDirection:"column"}}> <h1>About Me</h1><div className='underline'></div></motion.div>
     
      
      </Center>
    <div className='aboutScreen'>
        <Center>
            <p className='aboutText'>Hello! My name is 
            <motion.span
            transition={{delay:1,duration:1}}  
            initial={{
                        y:-500,
                        opacity:0,
                        color:"white",
                        scale:0.8
                    }}
                    animate={{
                        y:0,
                        opacity:1,
                        scale:1,
                        color:"#5800FF",
                    }}
                    exit={{
                        opacity:0
                    }} className='logoName'> Rishi</motion.span> and I enjoy creating things that exist on the internet I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Interested in the entire 
                    <motion.span transition={{delay:1,duration:1}} 
                    initial={{
                                y:-500,
                                opacity:0,
                                color:"white",
                                scale:0.8
                            }}
                            animate={{
                                y:0,
                                opacity:1,
                                scale:1,
                                color:"#72FFFF",
                            }}
                            exit={{
                                opacity:0
                            }} > Frontend </motion.span> spectrum and working on ambitious projects with positive people.When i don't code, I like to Cook, play 
                            <motion.span transition={{delay:1,duration:1}} 
                            initial={{
                                        y:-500,
                                        opacity:0,
                                        color:"white",
                                        scale:0.8
                                    }}
                                    animate={{
                                        y:0,
                                        opacity:1,
                                        scale:1,
                                        color:"#FF9551",
                                    }}
                                    exit={{
                                        opacity:0
                                    }} > Basketball </motion.span> and Video Games, Design stuff.</p>
        </Center>
        <Center>
            <motion.div 
            transition={{duration:2}}
            initial={{
             x:100
              
            }}
            animate={{
              x:0
            }}
            exit={{
              x:100
            }}
            
            className='aboutPic'>
              <img onMouseEnter={forPic} src={pic} alt="" />
            </motion.div>
        </Center>
        <Center></Center>
    </div>
    </motion.div>
  )
}

export default About