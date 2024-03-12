import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch3";

const UserCard = ({ height, width }) => {
  const [userData, setUserData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/user");
      const { status, data } = res;

      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <img src={userData?.image} alt="" height={height} width={width} />
          <p>Name: {userData?.name}</p>
          <p>Comments: {userData?.comments}</p>
          <p>Likes: {userData?.likes}</p>
        </div>
      ) : (
        <div>Fetching data...</div>
      )}
    </div>
  );
};

export default UserCard;
