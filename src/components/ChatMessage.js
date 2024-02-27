import React from 'react';



const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm py-2 ">
    
      <span class="material-symbols-outlined">
          person
          </span>
<span className='px-2 font-bold'> {name}</span>
   <span>{message}</span>
    </div>
  )
}

export default ChatMessage
