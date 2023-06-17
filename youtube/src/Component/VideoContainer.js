import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FETCH_YOUTUBE_API, YOUTUBE_VIDEOS_API } from "../Utils/Constant";
// import Header from "./Header";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getApiCall();
  }, []);
  const getApiCall = async () => {
    const data = await fetch(FETCH_YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap gap-4">
      {/* <Header searchData={videos} /> */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watchPage?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
}

export default VideoContainer;
