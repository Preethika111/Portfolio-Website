import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
            <div className='space-x-6'>
                <a href="#Hero" className='hover:text-gray-400'>Home</a>
                <a href="#About" className='hover:text-gray-400'>About</a>
                <a href="#Skills" className='hover:text-gray-400'>Skills</a>
                <a href="#Projects" className='hover:text-gray-400'>Projects</a>
                <a href="#Contact" className='hover:text-gray-400'>Contact</a>

            </div>
            <a href="#Contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transparent transition-transform 
            duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar