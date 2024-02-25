import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(()=>{
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async() =>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const val = await data.json();
    setSuggestions(val[1]);
    //update cache with results
    dispatch(cacheResults({
      [searchQuery]: val[1],
    }));
  }



  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2'>
    <div className='flex col-span-1 cursor-pointer' >
      <span onClick={() => toggleMenuHandler()}>
          <span class="material-symbols-outlined"> 
          menu
          </span>
      </span>
        <img className='h-8 mx-2' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"/>
    </div>
    <div className="col-span-10 px-10 relative">
  <input
    className="w-1/2 border-gray-400 border-2 p-1 rounded-l-full focus:outline-none focus:ring focus:border-blue-300"
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
    placeholder="Search..."
  />
  <button className="border-gray-400 border-2 p-1 rounded-r-full font-bold bg-gray-200" onClick={(e)=> setSearchQuery(e.target.value)}>
    Search
  </button>
  {showSuggestions && (
    <div className="absolute bg-white py-2 px-5 w-[37rem] rounded-lg shadow-lg border border-gray-200 mt-1">
      <ul>
        {suggestions?.map((item) => (
          <li key={item} className="px-2 py-2 shadow-sm hover:bg-gray-100 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )}
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
