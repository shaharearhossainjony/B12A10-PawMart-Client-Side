import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const CATEGORY_DATA = [
  {
    id: 1,
    title: "Pets (Adoption)",
    key: "Pets",
    emoji: "🐶",
    image: "https://i.ibb.co/SDnzHmB9/88.jpg",
  },
  {
    id: 2,
    title: "Food",
    key: "Food",
    emoji: "🍗",
    image: "https://i.ibb.co/Vcg2X8rD/5.jpg",
  },
  {
    id: 3,
    title: "Accessories",
    key: "Accessories",
    emoji: "🦴",
    image: "https://i.ibb.co/xSqBFfsq/9.jpg",
  },
  {
    id: 4,
    title: "Care Products",
    key: "Care Products",
    emoji: "💊",
    image: "https://i.ibb.co/wN0jM2xn/Screenshot-480.png",
  },
];

const CategorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-14 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl  md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Shop by Category
        </h2>
        <p className="text-gray-600 mt-2">
          Find everything your pet needs in one place.
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {CATEGORY_DATA.map((cat, index) => {
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
              <div className="relative h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/20 via-[#ff00ff]/20 to-[#ff1493]/20 opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold flex items-center gap-2 drop-shadow-lg">
                    <span className="text-2xl">{cat.emoji}</span>
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
