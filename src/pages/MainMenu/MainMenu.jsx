import React from "react";
import Card from "../../components/Card/Card";
import LongCard from "../../components/LongCard/LongCard";
import "./mainmenu-style.css";

export function MainMenu() {
  return (
    <div className="main-menu">
      <div className="top-section">
        <h1>İyi Akşamlar</h1>
        <div className="long-card-body">{new Array(6).fill(<LongCard />)}</div>
      </div>
      <div className="cards">
        <div className="cards-header">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="see-all">
            HEPSİNİ GÖR
          </span>
        </div>
        <div className="card-body">{new Array(10).fill(<Card />)}</div>
      </div>
    </div>
  );
}
