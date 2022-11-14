import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              {definitions.definition}
              <br />
              <strong>Example:</strong>
              <em>{definitions.example}</em>
              <Synonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </p>
    </div>
  );
}
