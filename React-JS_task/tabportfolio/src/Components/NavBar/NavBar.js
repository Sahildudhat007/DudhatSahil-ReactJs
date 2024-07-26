import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className='container mx-auto px-10 bg-blue-500'>
                <nav className='nav py-5 flex items-center justify-between'>
                    <div className='logo'>
                        <a href="#" className='text-xl text-white font-semibold'>Sahil</a>
                    </div>
                    <ul className='nav-bar flex'>
                        <li className='nav-list mr-6'>
                            <Link to="/" className='nav-link text-white text-lg'>Home</Link>
                        </li>
                        <li className='nav-list mr-6'>
                            <Link to="/page" className='nav-link text-white text-lg'>Page</Link>
                        </li>
                        <li className='nav-list mr-6'>
                            <Link to="/shop" className='nav-link text-white text-lg'>Shop</Link>
                        </li>
                        <li className='nav-list mr-6'>
                            <Link to="/contact" className='nav-link text-white text-lg'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar