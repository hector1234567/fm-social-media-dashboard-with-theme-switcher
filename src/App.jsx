import "./App.css";
import StatCard from "./components/stat-card";

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import DarkModeToggle from "./components/dark-mode-toggle";
import { useState } from "react";
import OverviewCard from "./components/overview-card";

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
        <DarkModeToggle toggleDarkMode={toggleDarkMode} checked={darkMode} />
      </div>
      <div className="container mx-auto p-4 space-y-4 -mt-16">
        <StatCard
          icon={facebook}
          author="@nathanf"
          followers="1987"
          qty="12"
          gradient="from-blue-500 to-blue-500"
        />
        <StatCard
          icon={twitter}
          author="@nathanf"
          followers="1044"
          qty="99"
          gradient="from-blue-500 to-blue-500"
        />
        <StatCard
          icon={instagram}
          author="@realnathanf"
          followers="11k"
          qty="1099"
          gradient="from-gradient-11 via-gradient-12 to-gradient-13"
        />
        <StatCard
          icon={youtube}
          author="Nathan F."
          followers="8239"
          qty="-144"
          gradient="from-red-700 to-red-700"
        />
      </div>
      <div className="container mx-auto p-4">
        <h2 className="dark:text-white font-bold mb-3 text-xl">
          Overview - Today
        </h2>
        <div className="space-y-3">
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
          <OverviewCard
            title="Page Views"
            qty="87"
            icon={facebook}
            percentage="3"
            rising={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
