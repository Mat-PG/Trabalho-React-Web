import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Firebase from '../services/FirebaseConnect'
import { Button } from '@material-ui/core';

function Header() {
    let history = useHistory();

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/");
            }).catch(() => {
                history.push("/");
            })
    }
    return (
        <header id="header">
            <div className="inner">
                <Link to='/' className="logo">HOME</Link>
                <nav id="nav">
                    <Link to='/Login'>LOGIN</Link>
                    <Link to='/Menu'>MENU</Link>
                    <Button
                        onClick={logoff}
                        variant="contained"
                        color="primary">
                        Logoff
                    </Button>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}

export default Header;