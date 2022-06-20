import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card/Card";
import "./librarie-style.css";

function Librarie() {
  const [cards, setCards] = useState([]);
  const getCarts = async () => {
    const req = await fetch("http://localhost:1337/api/category-cards");
    const res = await req.json();
    const response = res.data[0].attirbutes.MainMenuCards;
    setCards(response);
  };
  useEffect(()=>{getCarts()},[]) //prettier-ignore
  return (
    <div className="librarie-box">
      <h1 className="font-bold text-2xl mb-3">Çalma Listeleri</h1>
      <div className="flex">
        <div className="liked-songs">
          <div className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            tenetur, neque quibusdam odio unde, aliquid quam ipsum, incidunt non
            labore
          </div>
          <div>
            <h3 className="text-[30px] font-bold">Beğenilen Şarkılar</h3>
            <span className="font-normal text-base">180 beğenilen şarkı</span>
          </div>
        </div>
        <div className="flex ml-3">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Librarie;
