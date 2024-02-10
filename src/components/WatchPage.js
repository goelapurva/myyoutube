import React from 'react';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    }, []);

  return (
    <div className='p-2 m-2'>
      <iframe width="1200" 
      height="600" 
      src={"https://www.youtube.com/embed/kKvK2foOTJM"}
      title="YouTube video player"
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen>
       </iframe>
    </div>
  )
}

export default WatchPage
