import React from 'react';
import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() =>{

    //getVideos();
    const data = YOUTUBE_VIDEOS_API;
    setVideos(data);
    console.log(data);
  },[]);

  // const getVideos = async () => {

  //   //const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = data.json();
  //   console.log(json);
  // }
  return (
    <div className='flex flex-wrap'>
      {videos?.map((item) =>(
        <Link to={"/watch?v=" +item.id}>
          <VideoCard  key={item.id} info={item}/>
          </Link> 
      ) )}
    </div>
  )
}

export default VideoContainer;

