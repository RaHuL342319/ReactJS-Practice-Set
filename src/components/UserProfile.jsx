import React from "react";

const UserProfile = ({ name, age, email }) => {
  return (
    <div style={{ border: "1px solid gray", textAlign: "center" }}>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default UserProfile;
