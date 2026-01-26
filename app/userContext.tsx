"use client";

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  isAuth: false,
  profile: {
    firstName: "",
    lastName: "",
  },
});

const UserContextWrapper = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2",
      );
      const data = await response.json();
      setUserData(data);
    };

    fetchUser();
  }, [ ]);

  return (
    <UserContext.Provider
      value={{
        isAuth: !!userData,
        profile: {
          firstName: userData?.name || "",
          lastName: userData?.username || "",
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextWrapper;
