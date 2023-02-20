import React, { useRef } from "react";

export const ScrollContext = React.createContext();

const ScrollContextProvider = (props) => {
  return (
    <ScrollContext.Provider
      value={{
        productsRef: useRef(),
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
