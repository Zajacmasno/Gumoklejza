import React, { Component } from "react";
import { Link } from "react-router-dom"
import '../App.css'

class Nav extends Component {
    render(){
        return(
            <nav>
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="PCA">
                    <Link to="/sklep" id="link"> Products </Link> Contact About
                </div>
                <div className="shopAcc">
                    Shop Account
                </div>
            </nav>
        )
    }
}

export default Nav