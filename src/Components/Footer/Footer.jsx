import React from "react";
import { Facebook, Instagram, X } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b to-indigo-500 via-purple-500 from-pink-500 p-8 ">
      <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              PawMart
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              PawMart connects local pet owners and buyers for adoption and pet
              care products.
            </p>

            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <Facebook size={20} />,
                  link: "https://www.facebook.com",
                },
                {
                  icon: <Instagram size={20} />,
                  link: "https://www.instagram.com",
                },
                { icon: <X size={20} />, link: "https://www.x.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:pl-10">
            <h3 className="text-xl font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end w-full">
            <h3 className="text-lg font-bold text-white mb-2">
              Subscribe to Newsletter
            </h3>
            <p className="text-xs text-white/70 mb-4 text-left md:text-right">
              Get updates on new pets and supplies directly in your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-white/40 transition-all shadow-lg"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none text-white text-sm px-4 py-3 w-full placeholder-white/50 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 px-6 py-3 text-sm font-bold hover:bg-opacity-90 transition-all active:scale-95"
              >
                Join
              </button>
            </form>

            <div className="mt-6 text-left md:text-right"></div>
          </div>
        </div>

        <div className="  items-center gap-1.5 justify-center bg-white/10 py-4 px-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70 font-medium">
            © {new Date().getFullYear()} PawMart.
          </p>
          <p className="text-sm text-white/50 mt-1 uppercase tracking-widest">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
