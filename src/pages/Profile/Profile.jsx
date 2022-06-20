import React, { useState } from "react";
import { useEffect } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./profile-style.css";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [musics, setMusics] = useState([]);
  const getProfileData = async () => {
    const request = await fetch("http://localhost:1337/api/profile-cards");
    const res = await request.json();
    const response = res.data[0].attributes.ProfileCard;
    setProfileData(response);
  };
  const getMusics = async () => {
    const req = await fetch("http://localhost:1337/api/musics");
    const res = await req.json();
    const response = res.data[0].attributes.Music;
    setMusics(response);
  };

  useEffect(() => {
    getProfileData();
    getMusics();
  }, []);

  return (
    <div className="profile-box">
      <ProfileHeader />
      <div className="mt-5">
        <div className="cards-header flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Bu Ayın En Çok Dinlenen Sanatçıları
          </h2>
          <span>HEPSİNİ GÖR</span>
        </div>
        <div className="profile-cards">
          {profileData.map(
            (item) =>
            <ProfileCard key={item.id} name={item.name} image={item.image} category={item.category}/> //prettier-ignore
          )}
        </div>
      </div>
      <div className="my-6">
        <div className="cards-header flex justify-between items-centermy-3 mb-4">
          <h2 className="text-2xl font-bold">
            Bu Ayın En Çok Dinlenen Sanatçıları
          </h2>
          <span>HEPSİNİ GÖR</span>
        </div>
        {musics.map((item) => new Array(4).fill(<MusicCard item={item} />))}
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold">Takipçiler</h2>
        <div className="profile-cards">
          {profileData.map(
            (item) =>
            <ProfileCard key={item.id} name={item.name} image={item.image} category={item.category}/> //prettier-ignore
          )}
        </div>
      </div>
    </div>
  );
}
export default Profile;
