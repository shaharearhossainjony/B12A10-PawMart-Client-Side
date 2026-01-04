import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {  MapPin, Tag } from "lucide-react";

const RecentListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://pawmart-three.vercel.app/pet-supplies")
      .then((res) => res.json())
      .then((data) => {
        const latest = data
          .sort((a, b) => b._id.localeCompare(a._id))
          .slice(0, 8);
        setListings(latest);
      })
      .catch((error) => console.error("Error loading listings:", error));
  }, []);

  return (

    <section className="pt-5 px-4 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-12 text-center text-white tracking-tight"
        >
          Recent <span className="text-white/70">Listings</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((item, index) => (
            <motion.div
              key={item?._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
 
              className="group bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            >

              <div className="relative p-3">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-56 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-6 right-6  backdrop-blur-md border border-white/30 bg-pink-100 text-pink-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {item?.category}
                </div>
              </div>


              <div className="p-6 pt-2 space-y-4">
                <h3 className="text-xl font-bold text-white truncate">
                  {item?.name}
                </h3>

                <div className="space-y-2">
                  <p className="text-white/70 text-sm flex items-center gap-2">
                    <span className="font-semibold text-white/90 tracking-wide"> <MapPin size={14} className="text-white/50" /></span> {item?.location}
                  </p>

                  <div className="flex items-center mt-3 gap-2">
                       <Tag size={14} className="text-white/50" />
                      <p className="text-sm">
                        {item?.price == 0 ? (
                          <span className="text-green-300 font-black tracking-tighter italic">Free Adoption</span>
                        ) : (
                          <span className="text-white font-black text-lg">${item?.price}</span>
                        )}
                      </p>
                    
                  </div>
                </div>

                <Link
                  to={`/listings-details/${item?._id}`}
                  className="w-full block text-center py-3.5 bg-white text-purple-700 font-bold rounded-2xl hover:bg-purple-50 active:scale-95 transition-all shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentListings;
















