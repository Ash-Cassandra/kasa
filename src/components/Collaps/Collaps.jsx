import React, { useState } from 'react';
import arrow_top from './arrow_top.png'
import arrow_bottom from './arrow_bottom.png'

const Collaps = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollaps = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollaps}>
        {title}
        {isOpen ? <img src={arrow_top} alt="#" className='arrow'/> : <img src={arrow_bottom} alt="#" className='arrow'/>}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Collaps;