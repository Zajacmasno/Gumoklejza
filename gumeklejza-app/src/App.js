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
            <button id="makeOrder">Make Order</button>
          </div>
        </header>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>


      <div className='main'>
        <div className='mainTitle'>
          <h1>
            STARTER KITS
          </h1>
          <p>Sets perfext for beginners, choose yours.</p>
        </div>
        <div className='products'>
          dupa dupa 123
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
