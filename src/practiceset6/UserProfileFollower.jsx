import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch16";

const UserProfileFollower = () => {
  const [profilesData, setProfilesData] = useState();
  const [disable, setDisable] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/profile");
      const { status, data } = res;
      console.log(status, data);
      if (status === 200) {
        setProfilesData(data.profile);
        console.log(data.profiles);
      }
    } catch (e) {
      console.error("Error fetching profile data:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFollow = () => {
    setProfilesData((prevProfiles) => ({
      ...prevProfiles,
      followers: prevProfiles.followers + 1,
    }));
    setDisable(true);
  };

  return profilesData ? (
    <div>
      <h1>{profilesData.name}</h1>
      <p>
        <b>Views: </b> {profilesData.views}
        <br />
        <b>Email: </b> {profilesData.email}
        <br />
        <b>Age:</b> {profilesData.age}
        <br />
        <b>Gender: </b> {profilesData.age}
        <br />
        <b>Occupation: </b> {profilesData.occupation}
        <br />
        <b>Followers: </b> {profilesData.followers}
        <br />
        <b>Followed By: </b> {profilesData.followedBy}
      </p>

      <button onClick={handleFollow} disabled={disable}>
        Follow {profilesData.name}
      </button>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfileFollower;
