import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <Dictionary defaultKeyword="hero" />
        <footer>Coded by Sarai Kong</footer>
      </div>
    </div>
  );
}

export default App;
