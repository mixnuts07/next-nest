import { useState } from "react";

const ToggleDarkMode = (): string => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  return darkMode;
};
export default ToggleDarkMode;
