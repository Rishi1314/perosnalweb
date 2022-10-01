import { Center } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from 'react'
import Navbar from "./Navbar"
import ProjectCard from './ProjectCard';


const Projects = () => {

    const projects=[];

  return (
    <motion.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>

    <Center className='pageTitle'><h1>My Projects</h1></Center>
    <Center className='pageCaption'><h3>A collection of my most recent projects.</h3></Center>
 
    <div className='projectParent'>
    <div className='projectDiv'>
      <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
      <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
      <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'><img src="https://raw.githubusercontent.com/Rishi1314/tinder-clone/main/tinderclone.JPG" alt="" className='projectImage'/></div>
          <div className='projectLink'><a href='/'>View</a></div>
        </div>
      </div>
    </div>

        

  
    </motion.div>
  )
}

export default Projects