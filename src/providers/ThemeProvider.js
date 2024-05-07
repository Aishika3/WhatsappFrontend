import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkTheme = {
    backgroundColor: { light: "#16213E", dark: "#03001C" },
    color: { light: "#01CEA5", dark: "#1C82AD" },
  };
  const lightTheme = {
    backgroundColor: "#371B58",
    color: "#064663",
  };
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider
      value={{ theme: isDarkMode ? darkTheme : lightTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
