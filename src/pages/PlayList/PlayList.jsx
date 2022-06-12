import React, { useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import MusicCard from "../../components/MusicCard/MusicCard";
import "./play-list-style.css";
import { useState } from "react";

const CardDetailPage = () => {
  const [musics, setMusics] = useState([]);
  const getMusicData = async () => {
    const request = await fetch("http://localhost:1337/api/musics");
    const response = await request.json();
    const res = response.data[0].attributes.Music;
    setMusics(res);
  };
  useEffect(() => {
    getMusicData();
  }, []);
  return (
    <div className="card-detail-box">
      <div>
        <ProfileHeader />
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
          {new Array(10).fill(
            musics.map((music) => <MusicCard item={music} key={music.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
