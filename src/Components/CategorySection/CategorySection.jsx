import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dog, Drumstick, Bone, Pill } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORY_DATA = [
  {
    id: 1,
    title: "Pets (Adoption)",
    key: "Pets",
    icon: Dog,
    image: "https://i.ibb.co/SDnzHmB9/88.jpg",
  },
  {
    id: 2,
    title: "Food",
    key: "Food",
    icon: Drumstick,
    image: "https://i.ibb.co/Vcg2X8rD/5.jpg",
  },
  {
    id: 3,
    title: "Accessories",
    key: "Accessories",
    icon: Bone,
    image: "https://i.ibb.co/xSqBFfsq/9.jpg",
  },
  {
    id: 4,
    title: "Care Products",
    key: "Care Products",
    icon: Pill,
    image: "https://i.ibb.co/wN0jM2xn/Screenshot-480.png",
  },
];

const CategorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 px-4 bg-gradient-to-b to-indigo-500 via-purple-500 from-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Shop by <span className="text-white/70">Category</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-xl mx-auto font-medium"
          >
            Find everything your pet needs in one frosted, premium place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORY_DATA.map((cat, index) => {
            const Icon = cat.icon;

            let aosEffect = "fade-up";
            if (index === 0) aosEffect = "fade-right";
            if (index === 3) aosEffect = "fade-left";

            return (
              <Link
                key={cat.id}
                to={`/category-filtered-product/${cat.key}`}
                className="group"
                data-aos={aosEffect}
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-white/10 backdrop-blur-md cursor-pointer transition-all duration-500">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-purple-900/40 transition-all duration-500"></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                    <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl border border-white/20 group-hover:bg-white/30 transition-all duration-300 transform group-hover:-translate-y-2 shadow-xl">
                      <Icon className="w-8 h-8 text-pink-600 shadow-lg" />
                    </div>

                    <h3 className="text-pink-600 text-xl font-black mt-4 tracking-tight drop-shadow-md group-hover:scale-105 transition-transform">
                      {cat.title}
                    </h3>

                    <div className="w-10 h-1 bg-white/50 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
