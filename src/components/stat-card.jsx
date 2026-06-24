import iconUp from "../../images/icon-up.svg";
import iconDown from "../../images/icon-down.svg";

export default function StatCard({ icon, author, followers, qty, gradient }) {
  return (
    <div className={`bg-gradient-to-r ${gradient} pt-1 rounded-sm`}>
      <div className={`bg-navy-950 p-5 text-center`}>
        <div className="text-gray-400 flex justify-center text-xs mb-3">
          <img src={icon} alt="Icon" className="mr-2 self-center" />
          <span className=" self-center font-bold">{author}</span>
        </div>
        <p className="text-white font-extrabold text-5xl mb-1">{followers}</p>
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
