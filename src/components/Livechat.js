import React, {useEffect, useState} from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import {generateRandomName, makeRandomString} from '../utils/helper';

const Livechat = () => {

   const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=>{
       const i =  setInterval(()=>{
            //API Polling
            dispatch(addMessage({name: generateRandomName(), message: makeRandomString(20)}));

        }, [2000]);

        return () => clearInterval(i);

    }, []);

  return (
    <>
        <div className=' bg-slate-100  rounded-lg border border-gray-400 p-2 ml-2 w-full h-[600px] overflow-y-scroll flex-col-reverse'>
        <div>
        {
            chatMessages?.map((c,i) =><ChatMessage key={i} name={c.name} message={c.message} /> )
        }
        </div>
        </div>
        <form className='w-full border border-black p-2 ml-2 ' 
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({name: "Apurva Goel", message:liveMessage}));
            setLiveMessage("");
        }}>
        <input className="w-48 border-slate-900  px-2" type="text" value={liveMessage} onChange={(e) =>{ setLiveMessage(e.target.value)}} />
        <button className='px-2 mx-2 bg-green-100'> Send</button>
        </form>
    </>
  )
}

export default Livechat;
