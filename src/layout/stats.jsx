import { useEffect, useState } from "react";
import StatCard from "../components/stat-card";
import Loader from "../components/loader";

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/stats.json");
      const data = await res.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-4 -mt-16">
      {stats.length ? (
        stats.map(({ socialApp, author, followers, qty }) => (
          <StatCard
            socialApp={socialApp}
            author={author}
            followers={followers}
            qty={qty}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
