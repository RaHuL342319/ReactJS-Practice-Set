import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch20";

const UserCompanyDropDown = () => {
  const [userData, setUserData] = useState();
  const [filteredUserByCompany, setFilteredUserByCompany] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/users");
      const { status, data } = res;
      if (status === 200) {
        setUserData(data);
        setFilteredUserByCompany(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueCompanies = userData?.reduce(
    (acc, { company }) => {
      // Check if company already exists in the accumulator
      if (!acc.includes(company)) {
        // If not found, add it to the accumulator
        return [...acc, company];
      }
      // If found, return the accumulator as is (no duplicates added)
      return acc;
    },
    ["All"]
  );

  const handleChange = (e) => {
    if (e.target.value === "All") {
      setFilteredUserByCompany(userData); // Set all users if "All" selected
    } else {
      // Filter users by company when a specific company is selected
      setFilteredUserByCompany(
        userData.filter(({ company }) => company === e.target.value)
      );
    }
  };

  return userData ? (
    <div>
      <h1>User</h1>
      <select onChange={handleChange}>
        {" "}
        {/* Set default value to first company for visual cue */}
        {uniqueCompanies.map((comp, index) => (
          <option key={index} value={comp}>
            {comp}
          </option>
        ))}
      </select>

      <ul>
        {filteredUserByCompany.map(
          ({ name, email, website, company }, index) => (
            <li key={index}>
              <p>{name}</p>
              <p>{email}</p>
              <p>{website}</p>
              <p>{company}</p>
            </li>
          )
        )}
      </ul>
    </div>
  ) : (
    "Loading"
  );
};

export default UserCompanyDropDown;
