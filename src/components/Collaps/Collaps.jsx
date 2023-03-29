import React, { useState } from 'react';

const Collaps = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollaps = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollaps}>{title}</button>
      {isOpen && children}
    </div>
  );
};

export default Collaps;