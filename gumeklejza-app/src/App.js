import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
