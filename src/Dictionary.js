import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword[0]);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="search"
              onChange={handleKeywordChange}
              placeholder="Enter a word"
            />
          </form>
          <p className="hint">
            Suggested words: {props.defaultKeyword[1]},{" "}
            {props.defaultKeyword[2]}, {props.defaultKeyword[3]},{" "}
            {props.defaultKeyword[4]}
          </p>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
