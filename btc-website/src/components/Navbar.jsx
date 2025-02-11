import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Add useEffect to handle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="top-0 left-0 right-0 bg-white z-50 mt-2">
      <div className="px-4 md:mx-auto">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center text-xl font-inter font-bold text-btc pb-2">
            <Link to="/">
              <span className="flex items-center gap-2">
                <div className="w-1 h-6 bg-btc"></div>
                Binghamton Tech Collective
              </span>
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-btc hover:text-btc-hover absolute right-4 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200 ease-in-out"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)" }}
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0"
            } md:flex flex-col md:flex-row fixed md:relative top-16 pt-5 pb-10 md:top-0 left-0 right-0 w-screen md:w-auto md:bg-white items-center gap-8 md:gap-8 md:pb-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out z-50 px-8 pb-2 md:px-0 bg-white text-center md:text-left`}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/team", label: "Team" },
              { path: "/support", label: "Support" },
            ].map(({ path, label }) => (
              <li key={path} className="mb-6 md:mb-0">
                <Link
                  to={path}
                  className={`${
                    location.pathname === path
                      ? "text-white bg-btc px-4 py-2 rounded-lg md:bg-transparent md:text-btc"
                      : "text-gray-700 hover:text-btc hover:bg-btc/10 px-4 py-2 rounded-lg transition-colors md:bg-transparent md:hover:bg-transparent"
                  } block w-full text-[24px] md:text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="w-full md:w-auto">
              <button className="bg-btc hover:bg-btcdark text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-2 mx-auto md:mx-0 text-[24px] md:text-base">
                Join Now <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
