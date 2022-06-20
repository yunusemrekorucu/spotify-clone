import React, { useEffect } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import "./play-list-style.css";
import { useState } from "react";

const CardDetailPage = () => {
  const [musics, setMusics] = useState([]);
  const [detail, setDetail] = useState([]);
  const getMusicData = async () => {
    const request = await fetch("http://localhost:1337/api/musics");
    const response = await request.json();
    const res = response.data[0].attributes.Music;
    setMusics(res);
    const detailData = localStorage.getItem("data");
    const detail = JSON.parse(detailData);
    setDetail(detail);
  };

  useEffect(() => {
    getMusicData();
  }, []);

  return (
    <div className="card-detail-box">
      <div>
        <div className="profile">
          <div className="profile-info mb-5">
            <div className="image">
              <img src={detail.image} alt="" />
            </div>
            <div className="info-text ml-5 ">
              <span>ÇALMA LİSTESİ</span>
              <h1>{detail.title}</h1>
              <div>
                <span>{detail.description}</span>
                <span className="ml-2">-20 Takipçi</span>
                <span className="ml-2">-20 Takip Ediliyor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">asdşlfad</div>
      <div className="music-list">
        <div className="music-list-header">
          <div>
            <span># BAŞLIK</span>
          </div>
          <div>
            <span>ALBÜM</span>
            <span>TARİH EKLENDİ</span>
            <span>SVG</span>
          </div>
        </div>
        <div className="mt-2">
          {new Array(50).fill(
            musics.map((music) => <MusicCard item={music} key={music.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
