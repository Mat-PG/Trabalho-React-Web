import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="inner">
                <Link to='/' className="logo">HOME</Link>
                <nav id="nav">
                    <Link to='/Login'>LOGIN</Link>
                    <Link to='/Menu'>MAPA</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}

export default Header;