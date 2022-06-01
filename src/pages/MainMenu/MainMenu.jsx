import React from "react";
import Card from "../../components/Card/Card";
import LongCard from "../../components/LongCard/LongCard";
import LongCardItems from "../../json/LongCard.json";
import "./mainmenu-style.css";

export function MainMenu() {
  console.log(LongCardItems);
  return (
    <div className="main-menu">
      <div className="top-section">
        <h1>İyi Akşamlar</h1>
        <div className="long-card-body">
          {LongCardItems.map((item) => (
            <LongCard title={item.title} image={item.image} key={item.id} />
          ))}
        </div>
      </div>
      <div className="cards">
        <div className="cards-header">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="see-all">HEPSİNİ GÖR</span>
        </div>
        <div className="card-body">{new Array(7).fill(<Card />)}</div>
      </div>
    </div>
  );
}
