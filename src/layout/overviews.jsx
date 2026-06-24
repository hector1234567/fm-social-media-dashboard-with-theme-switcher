import { useState } from "react";
import Loader from "../components/loader";
import OverviewCard from "../components/overview-card";

export default function Overviews() {
  const [overviews, setOverviews] = useState([]);

  useState(() => {
    async function fetchOverviews() {
      const res = await fetch("/overviews.json");
      const data = await res.json();
      setOverviews(data);
    }
    fetchOverviews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="dark:text-white font-bold mb-3 text-xl">
        Overview - Today
      </h2>
      <div className="space-y-3">
        {overviews.length ? (
          overviews.map(({ title, qty, socialApp, percentage, rising }) => (
            <OverviewCard
              title={title}
              qty={qty}
              socialApp={socialApp}
              percentage={percentage}
              rising={rising}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
