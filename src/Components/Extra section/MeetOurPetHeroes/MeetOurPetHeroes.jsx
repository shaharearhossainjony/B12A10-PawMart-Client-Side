import React from "react";
import { motion } from "framer-motion";

const heroes = [
  {
    name: "Shaharear Hossain",
    role: "Adopted Bela (Cat)",
    img: "https://i.ibb.co.com/BKzfMjwh/IMG20240714140522.jpg",
  },
  {
    name: "Akash Amit",
    role: "Adopted Milo (Cat)",
    img: "https://i.ibb.co.com/DDMRhrvk/476832620-1656540938572526-309590913574458217-n.jpg",
  },
  {
    name: "Sadia Noor",
    role: "Volunteer",
    img: "https://i.ibb.co.com/cVMBqYz/cpy1.jpg",
  },
  {
    name: "Rifat Hasan",
    role: "Caregiver",
    img: "https://i.ibb.co.com/FLjGCgJB/1.jpg",
  },
];

const MeetOurPetHeroes = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
        >
          Meet Our <span className="text-white/70">Pet Heroes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/90 max-w-2xl mx-auto mb-16 text-lg font-medium leading-relaxed"
        >
          These incredible people have opened their hearts and homes to rescued
          pets. Their love and kindness inspire us every day.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {heroes.map((hero, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-8 shadow-2xl hover:bg-white/30 transition-all cursor-pointer"
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-white/40 blur-xl rounded-full group-hover:blur-2xl transition-all"></div>
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              <h3 className=" font-bold text-white mb-2">{hero.name}</h3>

              <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full border border-white/10">
                <p className="text-xs font-bold text-white uppercase ">
                  {hero.role}
                </p>
              </div>

              <div className="absolute top-4 right-6 text-white/10 text-6xl font-serif select-none">
                ”
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurPetHeroes;
