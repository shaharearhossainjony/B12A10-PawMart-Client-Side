import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader.jsx";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Tag } from "lucide-react";

const PetsAndSupplies = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pawmart-three.vercel.app/pet-supplies")
      .then((res) => {
        setListings(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [setLoading]);

  useEffect(() => {
    let result = [...listings];
    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, category, listings]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Loader className="animate-spin h-10 w-10 text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white text-center mb-10 tracking-tight"
        >
          Pets & <span className="text-white/70">Supplies</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl"
        >
          <div className="relative w-full md:w-1/3">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative w-full md:w-1/4">
            <Filter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              size={18}
            />
            <select
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/40 appearance-none cursor-pointer transition-all"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All" className="text-gray-900">
                All Categories
              </option>
              <option value="Pets" className="text-gray-900">
                Pets (Adoption)
              </option>
              <option value="Food" className="text-gray-900">
                Food
              </option>
              <option value="Accessories" className="text-gray-900">
                Accessories
              </option>
              <option value="Care Products" className="text-gray-900">
                Care Products
              </option>
            </select>
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/60 mt-20 text-xl italic"
          >
            No results found for "{search}"
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden shadow-2xl transition-all"
              >
                <div className="relative p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 right-6 px-3 py-1  backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold bg-pink-100 text-pink-600 uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <h3 className=" font-black text-white mb-3 truncate">
                    {item.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin size={14} className="text-white/50" />
                      {item.location}
                    </p>
                    <p className="flex items-center gap-1 text-white/70 text-sm">
                      <Tag size={14} className="text-white/50" />
                      <span className="font-bold text-white"></span>
                      {item.price == 0 ? (
                        <span className="text-green-300 font-black italic tracking-tighter">
                          Free for Adoption
                        </span>
                      ) : (
                        <span className="text-white font-black">
                          ${item.price}
                        </span>
                      )}
                    </p>
                  </div>

                  <Link to={`/listings-details/${item._id}`}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-white text-indigo-600 font-black rounded-2xl shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      See Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
