import React from "react";
import Card from "../../components/Card/Card";
import "./librarie-style.css";

export default function Librarie() {
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
          {new Array(4).fill(
            <Card
              title="Beğenilen Şarkılar"
              image="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
              description="asdfşadfkjasşdfkj"
            />
          )}
        </div>
      </div>
    </div>
  );
}
