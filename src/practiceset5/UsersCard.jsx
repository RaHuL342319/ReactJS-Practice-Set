import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch4";

const UsersCard = ({ height, width }) => {
  const [userData, setUserData] = useState();
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/users");
      const { status, data } = res;

      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      setError(true);
      comsole.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Feed</h1>
      {userData && !error ? (
        userData.map(({ image, name, comments, likes }) => {
          return (
            <div>
              <img src={image} alt="" height={height} width={width} />
              <p>Name: {name}</p>
              <p>Comments: {comments}</p>
              <p>Likes: {likes}</p>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UsersCard;
