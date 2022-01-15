import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import "./navigation.css"
function Navbar() {
    return (
        <div className='navbar'>
            <Navigation />
            <MobileNavigation className="burger" />
        </div>
    )
}

export default Navbar
