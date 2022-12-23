import React from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const userAuth = getAuth();
  console.log(userAuth);
  function logOut() {
    userAuth.signOut();
  }
  return (
    <div>
      <h1>My Profile</h1>
      <h2>
        {userAuth.currentUser?.email ? userAuth.currentUser.email : "loggedout"}
      </h2>
      <button onclick={logOut}>logout</button>
      <p>personal details</p>
    </div>
  );
}

export default Profile;
