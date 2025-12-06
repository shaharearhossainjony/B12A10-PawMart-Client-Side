import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out successful!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/pet-supplies"
                className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
              >
                Pet & Supplies
              </Link>
            </li>

            {user && (
              <>
                <li>
                  <Link
                    to="/add-listing"
                    className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                  >
                    Add Listing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-listings"
                    className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                  >
                    My Listings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-orders"
                    className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                  >
                    My Orders
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
          PawMart
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/pet-supplies"
              className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
            >
              Pet & Supplies
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  to="/add-listing"
                  className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  Add Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/my-listings"
                  className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  My Listings
                </Link>
              </li>
              <li>
                <Link
                  to="/my-orders"
                  className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                >
                  My Orders
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            onChange={handleThemeChange}
            checked={theme === "dark"}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {user ? (
          <>
            <div className=" group cursor-pointer">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full border border-purple-400"
              />
            </div>

            <button
              onClick={handleLogout}
              className="btn bg-purple-700 hover:bg-purple-800 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="btn bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
