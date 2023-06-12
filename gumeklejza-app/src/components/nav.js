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
                    <Link to="/sklep" id="link"> Products </Link> <a href="#contact">Contact</a> <a href="#contact">About</a>
                </div>
                <div className="shopAcc">
                <Link to="/produkty" id="link"> Account </Link>
                </div>
            </nav>
        )
    }
}

export default Nav