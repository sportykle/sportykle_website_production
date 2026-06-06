import { useState, useEffect, useRef } from "react";
import { Building2, ChevronDown } from "lucide-react";

function CustomSelect({
  id,
  value,
  onChange,
  disabled,
  options,
  error,
  placeholder = "Choose an organization",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Find the selected option to display its name and image
  const selectedOption = options.find((org) => org.id === value);

  // Toggle dropdown open/closed
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  // Handle option selection
  const handleSelect = (orgId) => {
    onChange({ target: { value: orgId } }); // Mimic native select onChange
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input trigger */}
      <div
        id={id}
        className={`w-full pl-8 pr-8 py-2 border rounded-xl shadow-sm flex items-center justify-between bg-white dark:bg-slate-800 text-gray-800 dark:text-white cursor-pointer transition-all duration-200 ${
          error ? "border-red-300" : "border-gray-300 dark:border-slate-600"
        } ${
          disabled
            ? "bg-gray-50 dark:bg-slate-800/50 cursor-not-allowed text-gray-500 dark:text-slate-500"
            : "hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        }`}
        onClick={toggleDropdown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
      >
        <div className="flex items-center space-x-4">
          {selectedOption?.display_picture ? (
            <img
              src={selectedOption.display_picture}
              alt={selectedOption.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <Building2 className="w-8 h-8 text-gray-400" />
           )}
          <span className="truncate">
            {selectedOption?.name || placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((org) => (
            <li
              key={org.id}
              className={`px-4 py-2 flex items-center space-x-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200 ${
                value === org.id ? "bg-blue-100 dark:bg-slate-700 font-semibold" : ""
              }`}
              onClick={() => handleSelect(org.id)}
              role="option"
              aria-selected={value === org.id}
            >
              {org.display_picture ? (
                <img
                  src={org.display_picture}
                  alt={org.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <Building2 className="w-8 h-8 text-gray-400" />
              )}
              <span className="truncate">{org.name}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-xs mt-2 font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default CustomSelect;