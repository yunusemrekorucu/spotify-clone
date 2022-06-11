import React, { useRef, useState } from "react";
import { useEffect } from "react";
import MostListened from "../../components/MostListenedList/MostListened";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./profile-style.css";

function Profile() {
  const fileRef = useRef();
  const [img, setImg] = useState(
    "https://i.pinimg.com/474x/8f/1b/09/8f1b09269d8df868039a5f9db169a772.jpg"
  );
  const [profileData, setProfileData] = useState([]);

  const changeImage = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImg(image);
  };
  const getProfileData = async () => {
    const request = await fetch("http://localhost:1337/api/profile-cards");
    const res = await request.json();
    setProfileData(res.data[0].attributes.ProfileCard);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="profile-box">
      <div className="profile">
        <div className="profile-info mb-5">
          <div className="profile-image">
            <input ref={fileRef} onChange={(e) => changeImage(e)} type="file" />
            <img
              onClick={() => {
                fileRef.current.click();
              }}
              src={img}
              alt=""
            />
          </div>
          <div className="info-text ml-5 ">
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
      <div>
        <MostListened />
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
