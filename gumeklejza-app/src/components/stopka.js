import React, { Component } from "react";

class Stopka extends Component {
    render(){
        return(
        <footer>
            <div className='contact' id="contact">
                <hr></hr>
                <h2>CONTACT</h2>
                <p>Owocowa 10a<br></br>80 - 120 Warsaw</p>
                <p>505 505 050 <br></br> gumoklejza@gmail.com</p>
            </div>
            <div className='aboutUs'>
                <hr></hr>
                <h2>ABOUT US</h2>
                <p></p>
            </div>
            <div className='safety'>
                <hr></hr>
                <h2>SAFETY</h2>
                <p></p>
            </div>
            <div className='delivery'>
                <hr></hr>
                <h2>DELIVERY</h2>
                <p></p>
            </div>
        </footer>
        )
    }
}

export default Stopka