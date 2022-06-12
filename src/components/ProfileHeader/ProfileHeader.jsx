import React, { useRef, useState } from "react";

function ProfileHeader() {
  const [img, setImg] = useState("https://i.pinimg.com/474x/8f/1b/09/8f1b09269d8df868039a5f9db169a772.jpg"); //prettier-ignore
  const fileRef = useRef();
  const changeImage = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImg(image);
  };
  return (
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
  );
}

export default ProfileHeader;
