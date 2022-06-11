import React from "react";
import "./librarie-style.css";

export default function Librarie() {
  return (
    <div className="librarie-box">
      <div>
        <h1 className="font-bold text-2xl mb-3">Çalma Listeleri</h1>
        <div className="liked-songs">
          <p>
            <li>Yaşlı Amca Keder</li>
            <li>Bağzıları</li>
            <li>Stabil</li>
            <li>KÖFN</li>
            <li>İkilem</li>
          </p>
          <div>
            <h3>Beğenilen Şarkılar</h3>
            <span>181 Beğenilen Şarkı</span>
          </div>
        </div>
      </div>
    </div>
  );
}
