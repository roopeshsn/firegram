import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/config";

export const UserContext = createContext({ user: null });

export function useAuth() {
  return useContext(UserContext);
}

export default function UserProvider({ user, children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setCurrentUser({ displayName, email, photoURL });
      }
    });

    return unsubscribe;
  }, [user]);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}
