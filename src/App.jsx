import "./App.css";

import DarkModeToggle from "./components/dark-mode-toggle";
import { useState } from "react";
import Stats from "./layout/stats";
import Overviews from "./layout/overviews";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    console.log(darkMode);
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div
      className={`bg-white dark:bg-gray-950 min-h-screen font-display ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-blue-50 dark:bg-gray-900 rounded-b-3xl p-4 pb-16">
        <div className="container mx-auto">
          <h1 className="text-gray-950 dark:text-white font-semibold text-xl">
            Social Media Dashboard
          </h1>
          <p className="text-gray-650 dark:text-gray-400 text-xs font-bold">
            Total Followers: 23,004
          </p>
          <hr className="border-gray-400 opacity-20 my-4" />
        </div>
        <div className="container mx-auto">
          <DarkModeToggle toggleDarkMode={toggleDarkMode} checked={darkMode} />
        </div>
      </div>
      <Stats />
      <Overviews />
    </div>
  );
}

export default App;
