import React from 'react'
import ProjectItem from './ProjectItem'
import AmeliorateImg from '../assets/Ameliorate.jpg'
import OpenMindedImg from '../assets/Open Minded.jpg'
import HappenInImg from '../assets/HappenIn.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center'>Projects</h1>
      <p className='text-center py-8'>
        I take insperation from my daily life in order create projects that can help make daily life easier. Weather it be from my love of video games to raising a child with special needs. Everything and anything can be solved with a little passion and a lot of hours coding!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem  img={AmeliorateImg} title= 'Ameliorate App' link={'https://ameliorate.herokuapp.com/login'}/>
        <ProjectItem  img={OpenMindedImg} title= 'Open Mind App' link={'https://open-minded.herokuapp.com/'}/>
        <ProjectItem  img={HappenInImg} title= 'HappenIn App' link={'https://viruz0322.github.io/HappenIn/'}/>
      </div>
    </div>
  )
}

export default Projects