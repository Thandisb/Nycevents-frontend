import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className='nav-container'>
        
            <Navbar.Brand>
                <Link to='/events'>
                <img src='https://c8.alamy.com/comp/MB8JC7/line-icon-style-new-york-city-skyline-vector-illustration-MB8JC7.jpg' 
                width='50' 
                height='50'
                className='logo'
                alt='nyc-skyline'
                />{' '}
               
                </Link>
            </Navbar.Brand>
            <p className='link'>
                 NYC Events App
                    </p>
            <ul>
     
     <li>
       <Link  className='nav-link' to='/events'>NYC Events</Link>
     </li>
     <li>
       <Link  className='nav-link' to='/events/new'>Create A New Events</Link>
     </li>
    </ul>
        
    </div>
  )
}

export default NavBar