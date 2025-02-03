import { use } from "react";
import { UserContext } from "../user-context";
import { Button } from "../button/Button";

export const AuthorizationButton = () => {
  const { user, authUser } = use(UserContext);

  return <Button title={user !== "" ? user : "Войти"} onClick={authUser} />;
};
