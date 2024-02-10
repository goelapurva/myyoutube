import React from 'react';
import Button from './Button';

const ButtonList = () => {

  const list = ["All", "Live", "Shopping", "Cooking", "Games","Ted Talk", "Tech","Blogs", "Spiritual" ];
  return (
    <div className='flex'>
      {list.map(item =>  <Button  name={item}/>)}
    </div>
  )
}

export default ButtonList
