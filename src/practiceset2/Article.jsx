import React, { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Know More</button>
      {showContent && <p>{content}</p>}
    </div>
  );
};

export default Article;
