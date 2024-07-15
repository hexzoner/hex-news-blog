import React from "react";
import { NavLink } from "react-router-dom";
import ThemesSwap from "./ThemesSwap";

const Navbar = () => {
  const navLinkMarkup = ({ isActive }) => {
    return ` text-xl p-2 rounded-lg duration-300 hover:underline underline-offset-[4px] 
               ${isActive && "underline decoration-[4px]"};`;
  };
  const menuItemMarkup = "text-lg cursor-pointer";

  return (
    <nav className="p-4 pb-6 top-0 bg-neutral text-white font-[PlayfairDisplay]">
      <ul className="flex justify-between list-none  flex-wrap py-4 max-w-[1200px] m-auto">
        <div className="flex items-center gap-4">
          <ThemesSwap />
          <NavLink className={navLinkMarkup} to="/">
            Home
          </NavLink>
        </div>
        <div className="flex flex-wrap space-x-4 max-w-[730px] gap-1 items-center">
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/wellness">
              Wellness
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/fashion">
              Fashion
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/lifestyle">
              Lifestyle
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/culture">
              Culture
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/art">
              Art
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/books">
              Books
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/sport">
              Sport
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/football">
              Football
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/music">
              Music
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/film">
              Film
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/games">
              Games
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/travel">
              Travel
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/business">
              Business
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/science">
              Science
            </NavLink>
          </li>
          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/politics">
              Politics
            </NavLink>
          </li>

          <li className={menuItemMarkup}>
            <NavLink className={navLinkMarkup} to="/media">
              Media
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
