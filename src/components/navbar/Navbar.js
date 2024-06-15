import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo.png'
import {BsFillCaretDownFill } from "react-icons/bs";


import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        <>
        <div className='navbar' name='top'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                        <img src={logo} alt="Recovery and Wellness Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className="hover-underline-animation"><Link to='/'>Home</Link></li>
                    <li className="hover-underline-animation"><Link to='/services'>Services</Link> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows"> <Link to={`#`}> Licensing <BsFillCaretDownFill /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/licensing-certification`}> Licensing and Certification</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/accreditation`}> Accreditation</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/business-licenses`}> Acquiring Business Licenses</NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`#`}> Operating <BsFillCaretDownFill /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/operational-standards`}> Advising on operational standards</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/training-staff`}> Training Staff</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/hiring-staff`}> Hiring Staff</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/write-policies`}> Helping write policies</NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to={`#`}> Marketing <BsFillCaretDownFill /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/market-research`}> Market Research
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/marketing-strategies`}>Marketing Strategies
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/real-estate-advisement`}> Real Estate Advisement
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/investing`}> Investing
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/insurance-contracting`}> Insurance Contracting
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/grant-writing`}> Grant Writing 
                            </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/facilitating`}> Facilitating 
                            </NavLink> </li>
                        </ul>
                    </li>

                    <li className="hover-underline-animation"><Link to='/mission'>Our Mission</Link> </li>
                    {/* <li className="hover-underline-animation"><Link to='/team'>Our Team</Link> </li> */}
                    <li className="hover-underline-animation"><Link to='/contact'>Contact</Link></li>
                
                </ul>


                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
