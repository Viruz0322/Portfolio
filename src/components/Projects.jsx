import React from 'react'
import ProjectItem from './ProjectItem'
import AmeliorateImg from '../assets/Ameliorate.jpg'
import NoteTakerImg from '../assets/Note Taker.jpg'
import TextEditorImg from '../assets/Text Editor.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ab eius dolore veritatis qui quasi, optio minima adipisci doloremque animi, natus aspernatur ipsam corporis id alias veniam? Corrupti, ab atque.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem  img={AmeliorateImg} title= 'Ameliorate App'/>
        <ProjectItem  img={NoteTakerImg} title= 'NoteTaker App'/>
        <ProjectItem  img={TextEditorImg} title= 'TextEditor App'/>
      </div>
    </div>
  )
}

export default Projects