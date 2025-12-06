import React from "react";
import { Facebook, Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">PawMart</h2>
          <p className="mt-4 text-sm leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>

          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <X size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center md:justify-end">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PawMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
