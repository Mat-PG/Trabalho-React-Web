import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="inner">
                <Link to='/' className="logo">HOME</Link>
                <nav id="nav">
                    <Link to='/Films'>FILMS</Link>
                    <Link to='/Starships'>STARSHIPS</Link>
                    <Link to='/People'>PEOPLE</Link>
                    <Link to='/Planets'>PLANETS</Link>
                    <Link to='/Species'>SPECIES</Link>
                    <Link to='/Login'>LOGIN</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}

export default Header;