import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="top-0 left-0 right-0 bg-white z-50 mr-8">
      <ul className="flex flex-row justify-end items-center gap-10 mx-auto h-16 px-6">
        <Link to="/">
          <li className="text-gray-600 hover:text-btc transition-colors cursor-pointer">
            Home
          </li>
        </Link>
        <li className="text-gray-600 hover:text-btc transition-colors cursor-pointer">
          About
        </li>
        <li className="text-gray-600 hover:text-btc transition-colors cursor-pointer">
          Projects
        </li>
        <li className="text-gray-600 hover:text-btc transition-colors cursor-pointer">
          Teams
        </li>
        <li className="text-gray-600 hover:text-btc transition-colors cursor-pointer">
          Contact Us
        </li>
        <li>
          <button className="bg-btc hover:bg-btcdark text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
            Join <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
