import React from "react";

function ProfilePhoto() {
  const src =
    "https://media.gq.com/photos/57963b22d81463fa0e31f40f/1:1/w_2600,h_2600,c_limit/messi-hair.jpg";

  return (
    <div>
      <img src={src} alt="Messi" height="150px" width="150px " />{" "}
    </div>
  );
}

export default ProfilePhoto;
