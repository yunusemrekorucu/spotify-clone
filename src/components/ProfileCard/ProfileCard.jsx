import React from "react";
import "./profilecard-style.css";

function ProfileCard({ name, image, category }) {
  return (
    <div className="profile-card">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <span>{category}</span>
    </div>
  );
}

export default ProfileCard;
