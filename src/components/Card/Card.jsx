import React from "react";
import "./card-style.css";

function Card() {
  return (
    <div className="card">
      <div className="relative">
        <img
          src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba14fd21d411cb52a266bb69c/1/tr/default"
          alt=""
        />
        <button className="card-button">
          <svg
            role="img"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            class="Svg-sc-1bi12j5-0 jgfuCe"
          >
            <path
              fill="#000"
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
            ></path>
          </svg>
        </button>
      </div>
      <h4>Daily Mix 1</h4>
      <p>KÖFN,Yaşlı Amca,Canozan,Dolu Kadehi Ters Tut ve dah...</p>
    </div>
  );
}

export default Card;
