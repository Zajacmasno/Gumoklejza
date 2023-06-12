import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import Nav from './components/nav';
import Stopka from './components/stopka';

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <Nav></Nav>
          <div className="dontPanic">
            <p>Don't Panic,<br></br> it's Organic</p>
            <a href="#srodek"><button id="makeOrder">Make Order</button></a>
          </div>
        </header>
        <div className='fala fala1'></div>
        <div className='fala fala2'></div>
        <div className='fala fala3'></div>
        <div className='fala fala4'></div>
      </section>
      <div className='main'>
        <div className='mainTitle'>
          <h1>
            STARTER KITS
          </h1>
          <p>Sets perfext for beginners, choose yours.</p>
        </div>
        <div className='products'>
        
         <div className='lewy'></div>
         <div className='srodek' id='srodek'></div>
         <div className='prawy'></div>
        
            
          
        </div>
        <div>
          <Link to="/sklep" id="link">See more </Link>
        </div>
      </div>
      <Stopka></Stopka>
    </div>
  );
}

export default App;
