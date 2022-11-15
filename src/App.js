import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  const randomWords = require(`random-words`);
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <i className="fa fa-solid fa-book App-logo "></i> Dictionary
          </h1>
        </header>
        <Dictionary defaultKeyword={randomWords(5)} />
        <footer>Coded by Sarai Kong</footer>
      </div>
    </div>
  );
}

export default App;
