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
      <div className="bg-blue-50 dark:bg-gray-900 rounded-b-3xl pb-16 pt-4">
        <div className="container mx-auto xl:flex xl:items-middle">
          <div className="xl:my-5">
            <h1 className="text-gray-950 dark:text-white font-bold text-xl xl:text-2xl mx-3">
              Social Media Dashboard
            </h1>
            <p className="text-gray-650 dark:text-gray-400 text-xs font-bold mx-3">
              Total Followers: 23,004
            </p>
          </div>
          <hr className="border-gray-400 opacity-20 my-4 mx-3 xl:hidden" />
          <div className="container mx-auto xl:mx-0 xl:ml-auto xl:basis-40 self-center">
            <DarkModeToggle
              toggleDarkMode={toggleDarkMode}
              checked={darkMode}
            />
          </div>
        </div>
      </div>
      <Stats />
      <Overviews />
    </div>
  );
}

export default App;
