import React from "react";
import { motion } from "framer-motion";

const heroes = [
  {
    name: "Shaharear Hossain",
    role: "Adopted Bella (Cat)",
    img: "https://i.ibb.co.com/BKzfMjwh/IMG20240714140522.jpg",
  },
  {
    name: "Akash Amit",
    role: "Adopted Milo (Cat)",
    img: "https://i.ibb.co.com/DDMRhrvk/476832620-1656540938572526-309590913574458217-n.jpg",
  },
  {
    name: "Sadia Noor",
    role: "Fostered 5 rescued pets",
    img: "https://i.ibb.co.com/cVMBqYz/cpy1.jpg",
  },
  {
    name: "Rifat Chowdhury",
    role: "Volunteer & Caregiver",
    img: "https://i.ibb.co.com/FLjGCgJB/1.jpg",
  },
];

const MeetOurPetHeroes = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-green-100">
      <div className="max-w-6xl mx-auto text-center">

        
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Meet Our{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
            Pet Heroes
          </span>
        </motion.h2>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto mb-14 text-lg"
        >
          These incredible people have opened their hearts and homes to rescued pets.
          Their love and kindness inspire us every day.
        </motion.p>

       
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {heroes.map((hero, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                rotate: 1.5,
                boxShadow: "0px 15px 30px rgba(34,197,94,0.25)",
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-green-500"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-400 shadow-md"
              />

              <h3 className="text-xl font-semibold text-gray-800">{hero.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{hero.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurPetHeroes;
