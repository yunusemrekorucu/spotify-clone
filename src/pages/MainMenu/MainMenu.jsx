import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card/Card";
import LongCard from "../../components/LongCard/LongCard";
import "./mainmenu-style.css";

export function MainMenu() {
  const [longCard, setlongCard] = useState([]);
  const [categoryCard, setCategoryCard] = useState([]);
  const getLongCards = async () => {
    const res = await fetch("http://localhost:1337/api/long-cards");
    const response = await res.json();
    const data = response.data[0].attributes.LongCardJson;
    setlongCard(data);
  };
  const getCategoryCards = async () => {
    const res = await fetch("http://localhost:1337/api/category-cards");
    const response = await res.json();
    const data = response.data[0].attributes.MainMenuCards;
    setCategoryCard(data);
  };
  useEffect(() => {
    getLongCards();
    getCategoryCards();
  }, []);

  return (
    <div className="main-menu">
      <div className="top-section">
        <h1>İyi Akşamlar</h1>
        <div className="long-card-body">
          {longCard.map((item) => (
            <LongCard title={item.title} image={item.image} key={item.id} />
          ))}
        </div>
      </div>
      <div className="cards">
        <div className="cards-header">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="see-all">HEPSİNİ GÖR</span>
        </div>
        <div className="card-body">
          {categoryCard.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="cards">
        <div className="cards-header">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="see-all">HEPSİNİ GÖR</span>
        </div>
        <div className="card-body">
          {categoryCard.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="cards">
        <div className="cards-header">
          <h1 className="text-[1.4rem] font-bold">YunusEmr İçin Derlendi</h1>
          <span className="see-all">HEPSİNİ GÖR</span>
        </div>
        <div className="card-body">
          {categoryCard.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
