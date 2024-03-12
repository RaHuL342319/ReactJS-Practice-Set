import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch14";

const UserProfile = () => {
  const [profilesData, setProfilesData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/profile");

      const { status, data } = res;
      if (status === 200) {
        setProfilesData(data.profiles);
        console.log(data.profiles);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return profilesData ? (
    <div>
      <h1>Profiles</h1>
      <p>
        <b>Name: </b> {profilesData.name}
        <br />
        <b>Email: </b> {profilesData.email}
        <br />
        <b>Age:</b> {profilesData.age}
        <br />
        <b>Gender: </b>
        {profilesData.age}
        <br />
        <b>Occupation: </b> {profilesData.occupation}
      </p>
      <button
        onClick={() => {
          setProfilesData({ ...profilesData, name: "Rahul" });
        }}
      >
        Update name
      </button>
      <button onClick={()=>{setProfilesData({...profilesData, follower: profilesData.follower + 1})}}>Follow {profilesData.name}</button>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
