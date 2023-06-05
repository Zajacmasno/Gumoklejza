import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <header>
          <nav>
            <div className="logo">
              <h1>LOGO</h1>
            </div>
            <div className="PCA">
              Products Contact About
            </div>
            <div className="shopAcc">
              Shop Account
            </div>
          </nav>
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
        <div className="maxlewo"></div>
         <div className='lewy'></div>
         <div className='srodek' id='srodek'></div>
         <div className='prawy'></div>
        
            
            <div className="maxprawo"></div>
        </div>
        <div>
          <a>See More</a>
        </div>
      </div>
      <footer>
        <div className='contact'>
          <h2>CONTACT</h2>
          <p>Owocowa 10a<br></br>80 - 120 Warsaw</p>
          <p>505 505 050 <br></br> gumoklejza@gmail.com</p>
        </div>
        <div className='aboutUs'>
          <h2>ABOUT US</h2>
          <p></p>
        </div>
        <div className='safety'>
          <h2>SAFETY</h2>
          <p></p>
        </div>
        <div className='delivery'>
          <h2>DELIVERY</h2>
          <p></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
