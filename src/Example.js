import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <h3>
          Example: <span>{props.example}</span>
        </h3>
      </div>
    );
  }
}
