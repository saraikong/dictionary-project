import React, { useEffect, useState } from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  const [sound, setSound] = useState(props.phonetics.audio);

  useEffect(() => {
    setSound(props.phonetics.audio);
  }, [props.phonetics]);

  function handleClick() {
    let play = new Audio(sound);
    setSound(props.phonetics.audio);
    console.log(play);
    play.play(props.phonetics.audio);
    console.log(props.phonetics);
  }
  if (props.phonetics.audio.length > 0) {
    return (
      <div className="Phonetics">
        <button
          type="button"
          className="btn btn-primary rounded-circle mb-2"
          onClick={handleClick}
        >
          <i class="fa fa-solid fa-play icon"></i>
        </button>
        {"  "}
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
