import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch18";

const UserAddressToggle = () => {
  const [userData, setUserData] = useState();
  const [showAddress, setShowAddress] = useState(false);
  
  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/user");
      const { status, data } = res;
      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //const {name, email,phone,address } = userData;
  return userData ? (
    <div>
      <h1>User</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>

      <button onClick={() => setShowAddress(!showAddress)}>
        {showAddress ? "Hide Address" : "Show Address"}
      </button>
      {showAddress && (
        <div>
          <p> {userData.address.street}</p>
          <p> {userData.address.suite}</p>
          <p> {userData.address.city}</p>
          <p>{userData.address.zipcode}</p>
        </div>
      )}
    </div>
  ) : (
    "Loading"
  );
};

export default UserAddressToggle;
