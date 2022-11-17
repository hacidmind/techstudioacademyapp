import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  return (
    <AppContext.Provider
      value={{
        blogs,
        setBlogs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;