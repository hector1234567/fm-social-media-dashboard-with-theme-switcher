export default function DarkModeToggle({ toggleDarkMode, checked }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-400 ">Dark Mode</span>

      <label
        className="inline-flex items-center cursor-pointer"
        onChange={toggleDarkMode}
      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={checked ? "true" : ""}
        />
        <div
          className="relative w-9 h-5 bg-gradient-to-t from-gradient-21 to-gradient-22 
        peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full 
        peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-navy-950  after:rounded-full after:h-4 
        after:w-4 after:transition-all peer-checked:bg-brand"
        ></div>
      </label>
    </div>
  );
}
