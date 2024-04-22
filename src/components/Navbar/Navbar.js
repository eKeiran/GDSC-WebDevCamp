import React from 'react';
import { Link } from 'react-router-dom';
import { header, about, projects, skills, contact } from '../../portfolio'

const Navbar = () => {

  return (
    <header className="flex items-center justify-between max-w-screen-lg w-95 mx-auto h-20">
      <h3>
        <a
          href={header.homepage}
          className="text-blue-300 hover:text-blue-700 hover:underline"
        >
          {header.title}
        </a>
      </h3>
      <nav className='center nav z-[3] mr-5 flex'>
        <ul className='flex'>

          {about && (
            <li className='ml-10'>
              <Link to="/" className='link'>
                about
              </Link>
            </li>
          )}

          {projects && (
            <li className='ml-10'>
              <Link to="/projects" className='link'>
                projects
              </Link>
            </li>
          )}

          {skills && (
            <li className='ml-10 z-[2]'>
              <Link to="/skills" className='link'>
                skills
              </Link>
            </li>
          )}

          {contact && (
            <li className='ml-10'>
              <Link to="/contact" className='link'>
                contact
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
