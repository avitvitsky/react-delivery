import { useCallback, useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("purple");

  const toggleTheme = useCallback(
    () =>
      setTheme((currentTheme) =>
        currentTheme === "purple" ? "orange" : "purple"
      ),
    []
  );

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
