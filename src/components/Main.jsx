import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' 
        src="src/assets/nordwood-themes-9a58YsGiTPk-unsplash.jpg" 
        alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/5'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:tex-5xl text-4xl font-bold text-green-400 '>I'm Francisco Perez</h1>
                <h2 className='flex sm:text-3xl text-2xl p-4 text-green-400'>
                    I'm a 
                    <TypeAnimation
                    sequence={[
                        'Developer',
                        2000,
                        'Father',
                        2000, 
                        'Watch Enthusiast',
                        2000,
                        'Researcher',
                        2000
                    ]}
                    wrapper = 'div'
                    cursor = {true}
                    repeat = {Infinity}
                    style = {{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://github.com/Viruz0322" target='_blank'>
                    <FaGithub className='cursor-pointer text-green-400' size = {20}/>
                    </a>
                    <a href="https://www.instagram.com/fperez32219/" target='_blank'>
                    <FaInstagram className='cursor-pointer text-green-400' size = {20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-perez-perez-134a7326a/" target='_blank'>
                    <FaLinkedinIn className='cursor-pointer text-green-400' size = {20}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main