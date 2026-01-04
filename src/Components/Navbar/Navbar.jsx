import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out successful!");
        setOpen(false);
      })
      .catch(() => toast.error("Logout failed"));
  };

  const navLinkClass = ({ isActive }) =>
    `font-bold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent
     ${isActive ? "border-b-2 border-purple-600 pb-1" : ""}`;

  return (
    <div className="bg-white/20 backdrop-blur-md shadow-md border-b border-white/30 sticky top-0 z-50 flex justify-between items-center px-4 py-2">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pet-supplies" className={navLinkClass}>
                Pet & Supplies
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-listing" className={navLinkClass}>
                    Add Listing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-listings" className={navLinkClass}>
                    My Listings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-orders" className={navLinkClass}>
                    My Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <NavLink
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          PawMart 🐾
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pet-supplies" className={navLinkClass}>
              Pet & Supplies
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-listing" className={navLinkClass}>
                  Add Listing
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-listings" className={navLinkClass}>
                  My Listings
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-orders" className={navLinkClass}>
                  My Orders
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <input
          type="checkbox"
          className="toggle toggle-sm"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />

        {!user ? (
          <NavLink
            to="/login"
            className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white"
          >
            Login
          </NavLink>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <img
              src={user?.photoURL}
              alt="User"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 z-50">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold">
                    {user?.displayName || "User"}
                  </p>
                </div>

                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-purple-100 dark:hover:bg-gray-800"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
