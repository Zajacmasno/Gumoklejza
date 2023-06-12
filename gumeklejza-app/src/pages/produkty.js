import React from 'react';
import './logowanie.css';



function produkty() {
    return (
        <div>
            <div className="top"></div>
           
                <div className="content">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Email, or phone..." className="input"></input>
                    <br></br> <br></br>
                    <input type="password" placeholder="Password..." className="input"></input>
                    <br></br> <br></br>

                    <button id="klikej">Sign In</button>
                    <br></br> <br></br>                  
                    <button id="klikej" onsubmit="console.log('You clicked submit.');">Create new Account</button>

                    
                    
                </div>
            
            <div className="footer"></div>
        </div>
    )
}

function siema() {
    alert("CIUL");
}

export default produkty