import React from 'react'
import avator from '../img/avator.PNG';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">

            <nav className="nav">

            <div className="profile">
                <img src={avator} alt=""/>
            </div>

         <ul className='nav-items'>
            <li className="nav-item">
                <NavLink to= '/' exact activeClassName = "active">
                    Home
                    </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to= '/About' exact activeClassName = "active">
                    About
                    </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to= '/portfolios' exact activeClassName = "active">
                    Portfolios
                    </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to= '/blogs' exact activeClassName = "active">
                     Blogs
                    </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to= '/contact' exact activeClassName = "active">
                    Contacts
                    </NavLink>
            </li>

                </ul>
            <footer className="footer">
               <p> Footer Elements will go here later </p>
            </footer>
            </nav>

           
            
        </div>
    )
}

export default NavBar
