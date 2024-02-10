import React from 'react';


const VideoCard = ({info}) => {

    const {title, views, thumbnailUrl,author, } = info;
    console.log(info,"info");
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg h-fit">
      <img className="rounded-lg" src={thumbnailUrl} alt="thumbnail"/>
      <ul>
        <li className="font-bold py-2"> {title}</li>
        <li>{author}</li>
        <li>{views} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;
