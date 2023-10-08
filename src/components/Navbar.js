import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='relative mx-auto bg-gray-900 p-4'>
        <div className='flex  container justify-between items-center text-white max-w-6xl mx-auto '>
            <div className='font-sans text-[20px] font-bold text-yellow-400'>
              <Link to="/"> CodeConnect </Link>
            </div>
            <ul className='flex space-x-5 font-medium '>
                <li className='hover:text-yellow-400  hover:underline-offset-4 '><Link to="/profile">Developers</Link></li>
                <li className='hover:text-yellow-400 hover:underline-offset-4'><Link to="/register">Register</Link></li>
                <li className='hover:text-yellow-400 hover:underline-offset-4'><Link to="/login">Login</Link></li>
            </ul>

        </div>
      
      
    </nav>
  )
}
