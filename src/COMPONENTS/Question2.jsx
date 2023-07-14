
import React from "react";

const Avatar = ({ user }) => {
  return (
    <div>
      
      <h2>{user.name}</h2>
      
      <img src={user.imageUrl} alt={user.name} style={{ width: user.imageSize }} />{" "}
    </div>
  );
};

export default Avatar;
