import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";

import { socialApps } from "../socialApps";

export default function OverviewCard({
  title,
  qty,
  socialApp,
  percentage,
  rising,
}) {
  return (
    <div className="bg-navy-50 dark:bg-navy-950 p-4 text-center rounded-sm">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-650 dark:text-gray-400 text-xs font-bold">
          {title}
        </span>
        <img className="w-4" src={socialApps[socialApp].icon} alt="Icon" />
      </div>
      <div className="flex justify-between items-end">
        <span className="text-gray-950 dark:text-white text-3xl font-semibold">
          {qty}
        </span>
        <span
          className={`text-xs font-bold flex justify-center items-center gap-2 ${
            rising ? "text-green-500" : "text-red-500"
          }`}
        >
          <img src={rising ? iconUp : iconDown} alt="arrow" />
          <span>{percentage}%</span>
        </span>
      </div>
    </div>
  );
}
