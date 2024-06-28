import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import'./Nav.css'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
function Nav() {
    const [menuOpen,setMenuOpen] = useState(false)

    return (
    <nav>
        <Link to='/'className='title' >Deekshith</Link>
        <div onClick={()=>
            setMenuOpen(!menuOpen)
        } className="menu">
            <FaBars className='icon'/>
        </div>
        <ul className={menuOpen?'open':''}>
            <li>
            <NavLink  to='/home' >Home</NavLink>
            </li>
            <li>
            <NavLink to='/About' >About</NavLink>
            </li>
            <li>
            <NavLink to='/Contact' >Contact</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav
