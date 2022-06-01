import React from "react";
import "./longCard-style.css";

function LongCard() {
  return (
    <div className="long-card">
      <img
        className="long-card-img"
        src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
        alt=""
      />
      <span className="ml-3">Beğenilen Şarkılar</span>
    </div>
  );
}

export default LongCard;
