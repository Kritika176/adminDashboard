import React from "react";
import style from "./UserCard.module.css";
export const UserCard = ({ email, username }) => {
  return (
    <div className={style.mainCard}>
      <div className={style.imageDiv}>
        <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="profile">
            
        </img>
      </div>
      <h4>{username}</h4>
      <h4>{email}</h4>
    </div>
  );
};
