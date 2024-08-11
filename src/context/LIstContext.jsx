import { Children, createContext, useState } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
