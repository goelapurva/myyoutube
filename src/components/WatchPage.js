import React from 'react';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    }, []);

  return (
    <div className='flex flex-col'>
    <div className='p-2 m-2'>
      <iframe width="1100" 
      height="550" 
      src={"https://www.youtube.com/embed/kKvK2foOTJM"}
      title="YouTube video player"
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen>
       </iframe>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage
