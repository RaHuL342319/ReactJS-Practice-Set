import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch15";

const VideoLabel = () => {
  const [videoData, setVideoData] = useState();
    const [label, setLabel] = useState();

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/getvideo");
      const { status, data } = res;

      if (status === 200) {
        setVideoData(data.videos);
        console.log(data.videos);
      }
    } catch (e) {
      console.error("Error fetching profile data:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    videoData ? <div>
        <img src={videoData.thumbnail} alt="" />
        <p>
            <b>{videoData.title}</b>
            <br />
            <b>Views: </b>{videoData.views}
            <br />
            <b>Likes:</b>{videoData.likes}
            <br />
            {label && <span><b>Label:</b> {label}</span>} 
        </p>
        
        <button onClick={()=>{setLabel("Self Motivational")}}>Add a Label</button>
    </div> : "Loading..."
  )
};

export default VideoLabel;
