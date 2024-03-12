import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch11";

const SocialMediaPost = () => {
  const [postData, setPostData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/posts");

      const { status, data } = res;
      if (status === 200) {
        setPostData(data.posts);
        console.log(data.posts);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return postData ? (
    <div>
      {" "}
      <h1>Post</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {postData.map(({ caption, src, views, likes }, index) => {
          return (
            <div key={index}>
              <img src={src} alt="" />
              <p>
                {" "}
                <b>{caption}</b>
                <br />
                <b>Views:</b>
                {views}
                <br />
                <b>Likes:</b> {likes}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setPostData(postData.filter(({ category }) => category === "Bakery"));
        }}
      >
        Show bakery
      </button>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default SocialMediaPost;
