import { NavLink } from "react-router";
import { Button } from "../button/Button";

export const Tablink = ({ link, title }) => {
  return (
    <NavLink to={link}>
      {({ isActive }) => <Button title={title} disabled={isActive} />}
    </NavLink>
  );
};
