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
    <div className="container mx-auto py-4 -mt-16 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7 px-3">
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
