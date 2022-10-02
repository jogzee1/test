import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'




const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>
            <div className='container'>
                <h2>Tim<span className='primary'>Crypto</span></h2>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}} />)}
                    
                </div>
            </div>
        </div>
  )
}

export default Navbar;