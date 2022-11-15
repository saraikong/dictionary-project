import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <ul key={index}>
              <li>
                {definitions.definition}
                <br />
                <Example example={definitions.example} />
                <Synonyms synonyms={definitions.synonyms} />
              </li>
            </ul>
          );
        })}
      </p>
    </div>
  );
}
