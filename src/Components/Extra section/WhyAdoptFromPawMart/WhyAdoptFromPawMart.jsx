import React from "react";
import { Heart, PawPrint, Home } from "lucide-react";
import { motion } from "framer-motion";

const WhyAdoptFromPawMart = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b to-indigo-500 via-purple-500 from-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
        >
          Why Adopt from <span className="text-white/70">PawMart?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/90 max-w-3xl mx-auto mb-16 text-lg font-medium leading-relaxed"
        >
          Every adoption saves a life. At PawMart, we rescue abandoned and
          homeless pets, giving them a second chance at happiness.
          <span className="block mt-2 font-bold text-white uppercase tracking-wider text-sm italic">
            "Adopt — don’t shop — and become a hero for an innocent soul."
          </span>
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[2.5rem] py-10 px-8 shadow-2xl transition-all cursor-pointer relative group"
          >
            <div className="w-24 h-24 bg-white/20 flex items-center justify-center mx-auto rounded-3xl mb-6 border border-white/20 rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <PawPrint className="w-12 h-12 text-pink-600 " />
            </div>
            <h3 className="font-bold text-2xl text-white mb-3">
              Rescue & Rehome
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We rescue pets from unsafe environments and find them loving,
              vetted homes where they can thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[2.5rem] py-10 px-8 shadow-2xl transition-all cursor-pointer relative group"
          >
            <div className="w-24 h-24 bg-white/20 flex items-center justify-center mx-auto rounded-3xl mb-6 border border-white/20 rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <Home className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl text-white mb-3">
              Forever Homes
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Every adopted pet goes to a safe, verified, and caring family with
              a lifetime of support from us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[2.5rem] py-10 px-8 shadow-2xl transition-all cursor-pointer relative group"
          >
            <div className="w-24 h-24 bg-white/20 flex items-center justify-center mx-auto rounded-3xl mb-6 border border-white/20 -rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <Heart className="w-12 h-12 text-pink-600 " />
            </div>
            <h3 className="font-bold text-2xl text-white mb-3">
              Ethical Adoption
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              No breeding, no selling — our only mission is saving lives and
              spreading love to innocent paws.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptFromPawMart;
