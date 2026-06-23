import "./App.css";
import StatCard from "./components/stat-card";

import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen font-display">
      <div className="bg-gray-900 rounded-b-3xl p-4">
        <div className="container mx-auto">
          <h1 className="text-white font-bold text-xl">
            Social Media Dashboard
          </h1>
          <p className="text-gray-400">Total Followers: 23,004</p>
        </div>
      </div>
      <div className="container mx-auto p-4 space-y-4">
        <StatCard
          icon={facebook}
          author="nathanf"
          followers="1987"
          qty="12"
          gradient="from-blue-500 to-blue-500"
        />
        <StatCard
          icon={twitter}
          author="nathanf"
          followers="1044"
          qty="12"
          gradient="from-blue-500 to-blue-500"
        />
        <StatCard
          icon={instagram}
          author="nathanf"
          followers="11k"
          qty="12"
          gradient="from-gradient-11 via-gradient-12 to-gradient-13"
        />
        <StatCard
          icon={youtube}
          author="nathanf"
          followers="8239"
          qty="12"
          gradient="from-red-700 to-red-700"
        />
      </div>
    </div>
  );
}

export default App;
