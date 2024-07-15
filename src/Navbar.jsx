import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 pb-6 top-0  bg-white">
      <ul className="flex justify-between list-none m-0 p-0">
        <Link to="/" className="text-lg cursor-pointer hover:text-blue-500">
          Home
        </Link>
        <div className="flex space-x-4 ">
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/music">Music</Link>
          </li>
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/games">Games</Link>
          </li>
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/travel">Travel</Link>
          </li>
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/business">Business</Link>
          </li>
          <li className="text-lg cursor-pointer hover:text-blue-500">
            <Link to="/science">Science</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
