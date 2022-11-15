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
        <footer>
          This project was coded by Sarai Kong and is{" "}
          <a
            href="https://github.com/saraikong/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://gentle-clafoutis-9c90c4.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
