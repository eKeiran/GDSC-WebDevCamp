import React, { useContext, useState } from 'react';
import { WbSunnyRounded, Brightness2 } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { ThemeContext } from '../../contexts/theme'
import { about, projects, skills, contact } from '../../portfolio'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav z-[2] mr-5 flex'>
      <ul
        style={{ zIndex: 3, display: showNavList ? 'flex' : null }}
        className='flex'
      >
        {about.length ? (
          <li className='ml-10'>
            <Link to="/" onClick={toggleNavList} className='link link--nav'> {/* Use Link instead of anchor tag */}
              about
            </Link>
          </li>
        ) : null}

        {projects.length ? (
          <li className='ml-10'>
            <Link to="/projects" onClick={toggleNavList} className='link link--nav'> {/* Use Link instead of anchor tag */}
              Projects
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className='ml-10  z-[2]'>
            <Link to="/skills" onClick={toggleNavList} className='link link--nav'> {/* Use Link instead of anchor tag */}
              Skills
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className='ml-10'>
            <Link to="/contact" onClick={toggleNavList} className='link link--nav'> {/* Use Link instead of anchor tag */}
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon mt-0 ml-5'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRounded /> : <Brightness2/>}
      </button>

    </nav>
  )
}

export default Navbar
