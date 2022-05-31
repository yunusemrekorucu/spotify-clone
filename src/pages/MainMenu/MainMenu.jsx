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
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="text-xs text-gray-500 font-bold">HEPSİNİ GÖR</span>
        </div>
        <div className="card-body">{new Array(7).fill(<Card />)}</div>
      </div>
    </div>
  );
}
