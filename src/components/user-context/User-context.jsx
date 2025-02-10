import { useCallback, useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthorized: false });

  const authUser = useCallback(
    () =>
      setUser((prev) =>
        prev.isAuthorized
          ? { isAuthorized: false }
          : { isAuthorized: true, name: "Антон" }
      ),
    []
  );

  return <UserContext value={{ user, authUser }}>{children}</UserContext>;
};
