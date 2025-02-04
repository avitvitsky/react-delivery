import { use } from "react";
import { ThemeContext } from "../theme-context";
import { Button } from "../button/Button";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <Button
      title={theme === "purple" ? "Orange Theme" : "Purple Theme"}
      onClick={toggleTheme}
    />
  );
};
