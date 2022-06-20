import React from "react";
import "./longCard-style.css";

function LongCard({ item }) {
  return (
    <div className="long-card">
      <img className="long-card-img" src={item.image} alt="" />
      <span className="ml-3">{item.title}</span>
      <button className="long-card-btn">
        <svg
          role="img"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          class="Svg-sc-1bi12j5-0 jgfuCe"
        >
          <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
      </button>
    </div>
  );
}

export default LongCard;
