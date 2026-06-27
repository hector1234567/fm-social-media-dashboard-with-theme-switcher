import "./App.css";

import DarkModeToggle from "./components/dark-mode-toggle";
import { Suspense } from "react";
import Stats from "./layout/stats";
import Overviews from "./layout/overviews";
import Loader from "./components/loader";
import { fetchStats, fetchOverviews } from "./utils";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen font-display">
      <div className="bg-blue-50 dark:bg-gray-900 rounded-b-3xl pb-16 pt-4">
        <div className="max-w-279 mx-auto lg:flex lg:items-middle">
          <div className="lg:my-5">
            <h1 className="text-gray-950 dark:text-white font-bold text-xl lg:text-2xl mx-3">
              Social Media Dashboard
            </h1>
            <p className="text-gray-650 dark:text-gray-400 text-xs font-bold mx-3">
              Total Followers: 23,004
            </p>
          </div>
          <hr className="border-gray-400 opacity-20 my-4 mx-3 xl:hidden" />
          <div className="max-w-279 mx-auto lg:mx-0 lg:ml-auto lg:basis-40 self-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Stats fetchStats={fetchStats()} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Overviews fetchOverviews={fetchOverviews()} />
      </Suspense>
    </div>
  );
}

export default App;
