import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch10";

const VideoLibrary = () => {
  const [videoData, setVideoData] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/videos");

      const { status, data } = res;
      if (status === 200) {
        setVideoData(data.videos);
        console.log(data.videos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return videoData ? (
    <div> <h1>Playlist</h1> 
    <div style={{display: "flex", flexWrap:"wrap", gap: "20px"}}>
     
      {videoData.map(({ title, thumbnail, views, likes }, index) => {
        return (
          <div key={index} >
            <img src={thumbnail} alt="" />
            <p>
              {" "}
              <b>{title}</b>
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
    <button onClick={()=> setVideoData(videoData.filter((data, index) => index !== 0))}>Delete</button>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default VideoLibrary;
