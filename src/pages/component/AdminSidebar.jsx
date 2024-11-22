import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaCode,
  FaBriefcase,
  FaBlog,
  FaProjectDiagram,
  FaSignOutAlt,
  FaHome
} from 'react-icons/fa'

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Projects', icon: FaProjectDiagram, path: '/dashboard' },
    { name: 'Skills', icon: FaCode, path: '/dashboard/skills' },
    { name: 'Experience', icon: FaBriefcase, path: '/dashboard/experience' },
    { name: 'Blogs', icon: FaBlog, path: '/dashboard/blogs' },
    { name: 'Home', icon: FaHome, path: '/' }
  ]

  return (
    <>
      <button
        className='fixed top-4 left-4 z-20 md:hidden bg-gray-800 text-white p-2 rounded-md'
        onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside
        className={`fixed top-0 left-0 z-10 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
        <div className='flex flex-col h-full'>
          <div className='p-5 text-2xl font-bold'>Admin Dashboard</div>

          <nav className='flex-grow'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className='flex items-center px-5 py-3 text-gray-300 hover:bg-gray-700 transition-colors duration-200'
                onClick={() => setIsOpen(false)}>
                <item.icon className='mr-3' />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className='p-5'>
            <button
              className='flex items-center w-full px-4 py-2 text-gray-300 bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-200'
              onClick={() => {
                // Add logout logic here
                console.log('Logout clicked')
              }}>
              <FaSignOutAlt className='mr-3' />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar
