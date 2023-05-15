import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

const Context = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const value = {
    isSuccess,
    setIsSuccess,
    isActive,
    setIsActive,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
