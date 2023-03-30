import React, { useState } from 'react'
import { 
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail
} from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'


function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log('State changed')
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z[99] text-green-400 md:hidden'/>
      {/* This creates a if else statment to show different elements*/}
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} 
            href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onCLick={handleNav} 
            href="#work" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>Work</span>
            </a>
            <a onCLick={handleNav} 
            href="#projec
            ts" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onCLick={handleNav} 
            href="#main" 
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>Resume</span>
            </a>
            <a onCLick={handleNav} 
            href="#contac
            t" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>

        )
        : (
            ''
        )}
          <div className='md:block hidden fixed top-[15%] z-10'>
            <div className='flex flex-col'>
              <a href="#main" className='rounded-full shadow-lg bg-green-100 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={20}/>
              </a>
              <a href="#work" className='rounded-full shadow-lg bg-green-100 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <GrProjects size={20}/>
              </a>
              <a href="#projects" className='rounded-full shadow-lg bg-green-100 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineProject size={20}/>
              </a>
              <a href="#main" className='rounded-full shadow-lg bg-green-100 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson size={20}/>
              </a>
              <a href="#contact" className='rounded-full shadow-lg bg-green-100 shadow-green-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={20}/>
              </a>
            </div>
          </div>


    </div>
  )
}

export default Sidenav