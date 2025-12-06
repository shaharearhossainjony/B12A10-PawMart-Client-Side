import React from "react";
import { Heart, PawPrint, Home } from "lucide-react";
import { motion } from "framer-motion";

const WhyAdoptFromPawMart = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-green-200">
      <div className="max-w-6xl mx-auto text-center">


        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Why Adopt from{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
            PawMart ?
          </span>
        </motion.h2>

 
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto mb-14 text-lg"
        >
          Every adoption saves a life. At PawMart, we rescue abandoned and homeless
          pets, giving them a second chance at happiness.  
          <span className="font-semibold"> Adopt — don’t shop — and become a hero for an innocent soul.</span>
        </motion.p>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          <motion.div
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: "0px 15px 25px rgba(16, 185, 129, 0.3)",
            }}
            className="bg-white rounded-2xl py-8 px-6 shadow-md cursor-pointer transition"
          >
            <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto rounded-full mb-4">
              <PawPrint className="w-10 h-10 text-green-700" />
            </div>
            <h3 className="font-bold text-xl text-green-700 mb-2">
              Rescue & Rehome
            </h3>
            <p className="text-gray-600 text-sm">
              We rescue pets from unsafe environments and find them loving homes.
            </p>
          </motion.div>

   
          <motion.div
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: "0px 15px 25px rgba(244, 114, 182, 0.3)",
            }}
            className="bg-white rounded-2xl py-8 px-6 shadow-md cursor-pointer transition"
          >
            <div className="w-20 h-20 bg-pink-100 flex items-center justify-center mx-auto rounded-full mb-4">
              <Heart className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="font-bold text-xl text-pink-600 mb-2">
              Ethical Adoption
            </h3>
            <p className="text-gray-600 text-sm">
              No breeding, no selling — just saving lives and spreading love.
            </p>
          </motion.div>

      
          <motion.div
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: "0px 15px 25px rgba(59, 130, 246, 0.3)",
            }}
            className="bg-white rounded-2xl py-8 px-6 shadow-md cursor-pointer transition"
          >
            <div className="w-20 h-20 bg-blue-100 flex items-center justify-center mx-auto rounded-full mb-4">
              <Home className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl text-blue-600 mb-2">
              Forever Homes
            </h3>
            <p className="text-gray-600 text-sm">
              Every adopted pet goes to a safe, verified, and caring family.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptFromPawMart;

