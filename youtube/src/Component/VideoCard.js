import React from "react";

function VideoCard({ info }) {
  // console.log(info, "check video");
  // const { snippet, statistics } = info;
  // const { thumbnails, channelTitle, title } = snippet;
  return (
    <section className="border rounded-lg shadow-lg border-gray-200  w-44">
      <img
        className="  items-center flex m-auto rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="Thumbnails"
      />
      <h1 className="mx-1 front-bold">{info?.snippet?.title}</h1>
      <h2 className="mx-1">{info?.snippet?.channelTitle}</h2>
      <h2 className="mx-1">{info?.statistics?.viewCount}</h2>
    </section>
  );
}

export default VideoCard;
