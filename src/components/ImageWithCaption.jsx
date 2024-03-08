import React from "react";

const ImageWithCaption = ({ imageLink, caption }) => {
  return (
    <div>
      <img src={imageLink} alt="" />
      <figcaptioncaption>{caption}</figcaptioncaption>
    </div>
  );
};

export default ImageWithCaption;
