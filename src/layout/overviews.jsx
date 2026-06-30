import { use } from "react";
import OverviewCard from "../components/overview-card";
import ErrorBoundary from "./error-boundary";

function Overviews({ fetchOverviews }) {
  const overviews = use(fetchOverviews);

  return (
    <div className="max-w-279 mx-auto p-3">
      <h2 className="dark:text-white font-bold mb-3 lg:my-5 text-xl">
        Overview - Today
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {overviews.map(
          ({ title, qty, socialApp, percentage, rising }, index) => (
            <OverviewCard
              key={index}
              title={title}
              qty={qty}
              socialApp={socialApp}
              percentage={percentage}
              rising={rising}
            />
          ),
        )}
      </div>
    </div>
  );
}

export function OverviewsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Overviews {...props} />
    </ErrorBoundary>
  );
}

export default Overviews;
