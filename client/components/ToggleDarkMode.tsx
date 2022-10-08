import { useState } from "react";

const ToggleDarkMode = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<string>("dark");
  const toggleMode = () => {
    darkMode === "dark" ? setDarkMode("") : setDarkMode("dark");
  };
  // return darkMode;
  return <button onClick={toggleMode}>Toggle Mode</button>;
};
export default ToggleDarkMode;
