import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.src.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="pexels">
          <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
            Photos provided by Pexels
          </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
