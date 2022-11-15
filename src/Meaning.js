import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              {definitions.definition}
              <br />

              <Example example={definitions.example} />
              <Synonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </p>
    </div>
  );
}
