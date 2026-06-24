export default function DarkModeToggle({ toggleDarkMode, checked }) {
  return (
    <div className="flex justify-between items-center mx-3">
      <span className="text-gray-600 dark:text-gray-400 font-bold">
        Dark Mode
      </span>

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
          className="relative w-9 h-5 bg-gray-400 dark:bg-gradient-to-t dark:from-gradient-21 dark:to-gradient-22 
        peer-focus:outline-none rounded-full 
        peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-navy-950  after:rounded-full after:h-4 
        after:w-4 after:transition-all peer-checked:bg-brand hover:bg-gradient-to-tl hover:from-gradient-21 hover:to-gradient-22"
        ></div>
      </label>
    </div>
  );
}

// peer-focus:ring-1 peer-focus:ring-gray-400 dark:peer-focus:ring-brand-soft
