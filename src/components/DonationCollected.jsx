import React from "react";

const DonationCollected = ({ donationData }) => {
  return (
    <div>
      <h3>
        Total Donation Collected:{" "}
        {donationData.reduce((acc, { Donation }) => {
          return (acc += Donation);
        }, 0)}
      </h3>
    </div>
  );
};

export default DonationCollected;
