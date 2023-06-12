import React from 'react';
import './pages.css';
import Stopka from '../components/stopka.js';
import Nav from '../components/nav';

function sklep() {
    return (
        <div>
            <Nav></Nav>
            
            <div className="main">
                <div className="row1">
                    <div className="ciul">Sour Diesel 21$ </div>
                    <div className="ciul">White Widow 37$</div>
                    <div className="ciul">Venom OG  25$</div>
                </div>
                <div className="row2">
                <div className="ciul">Obama 14$</div>
                    <div className="ciul">Cheese 15$</div>
                    <div className="ciul">Cali Gold 19$</div>
                </div>
            </div>
            <Stopka></Stopka>
        </div>
    )
}

export default sklep