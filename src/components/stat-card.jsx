import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";

import { socialApps } from "../socialApps";

export default function StatCard({ socialApp, author, followers, qty }) {
  return (
    <div
      className={`bg-gradient-to-r ${socialApps[socialApp].gradient} pt-1 rounded-sm`}
    >
      <div className="bg-navy-50 dark:bg-navy-950 p-5 text-center h-full">
        <div className="text-gray-400 flex justify-center text-xs mb-3">
          <img
            src={socialApps[socialApp].icon}
            alt="Icon"
            className="mr-2 self-center"
          />
          <span className=" self-center font-bold">{author}</span>
        </div>
        <p className="text-gray-950 dark:text-white font-extrabold text-5xl mb-1">
          {followers}
        </p>
        <p className="text-gray-400 text-xs mb-3 tracking-[.3rem]">Followers</p>
        <p
          className={`text-xs font-bold flex justify-center items-center gap-2 ${
            qty < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          <img src={qty < 0 ? iconDown : iconUp} alt="arrow" />
          {Math.abs(qty)} Today
        </p>
      </div>
    </div>
  );
}
