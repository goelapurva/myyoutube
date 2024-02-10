import React from 'react';
import {useDispatch} from "react-redux";
import {toggleMenu} from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHanlder = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2'>
    <div className='flex col-span-1 cursor-pointer' >
      <span onClick={() => toggleMenuHanlder()}>
          <span class="material-symbols-outlined"> 
          menu
          </span>
          </span>
        <img className='h-8 mx-2' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"/>
    </div>
    <div className='col-span-10 px-10'> 
      <input className="w-1/2 border-gray-400  border-2 p-1 rounded-l-full" type="text" />
      <button className=" border-gray-400 border-2 p-1 rounded-r-full font-bold" >
      
search

       </button>
    </div>
    <div className='col-span-1'>
      <span class="material-symbols-outlined">
          person
          </span>

    </div>
    </div>
  )
}

export default Head;
