import { useCallback, useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Антон");

  const authUser = useCallback(
    () => setUser((currentUser) => (currentUser !== "" ? "" : "Антон")),
    []
  );

  return <UserContext value={{ user, authUser }}>{children}</UserContext>;
};
