import React from "react";
import MostListened from "../../components/MostListenedList/MostListened";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./profile-style.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile-info">
          <div className="profile-image">
            <input type="file" />
            <img
              src="https://i.scdn.co/image/ab6775700000ee855be80f2e3810102a23ee1daf"
              alt=""
            />
          </div>
          <div className="info-text">
            <span>PROFİL</span>
            <h1>YunusEmr</h1>
            <div>
              <span>1 Herkese Açık Çalma Listesi</span>
              <span className="ml-2">-20 Takipçi</span>
              <span className="ml-2">-20 Takip Ediliyor</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-5">
        <div className="cards-header flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Bu Ayın En Çok Dinlenen Sanatçıları
          </h2>
          <span>HEPSİNİ GÖR</span>
        </div>
        <div className="profile-cards">
          {new Array(8).fill(<ProfileCard />)}
        </div>
      </div>
      <div>
        <MostListened />
      </div>
    </>
  );
}
export default Profile;
