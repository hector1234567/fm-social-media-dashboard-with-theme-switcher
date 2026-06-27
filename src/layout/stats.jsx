import { use } from "react";
import StatCard from "../components/stat-card";

export default function Stats({ fetchStats }) {
  const stats = use(fetchStats);

  return (
    <div className="max-w-279 mx-auto py-4 -mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 px-3">
      {stats.map(({ socialApp, author, followers, qty }, index) => (
        <StatCard
          key={index}
          socialApp={socialApp}
          author={author}
          followers={followers}
          qty={qty}
        />
      ))}
    </div>
  );
}
