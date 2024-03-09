import React from "react";

const ImageCard = ({ imageLink, height, width }) => {
  return (
    <div>
      <img src={imageLink} alt="" height={height} width={width} />
    </div>
  );
};

export default ImageCard;
