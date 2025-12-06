import React from "react";
import { Link } from "react-router";


const CATEGORY_DATA = [
  {
    id: 1,
    title: "Pets (Adoption)",
    key: "Pets",
    emoji: "🐶",
    image: "https://i.ibb.co.com/SDnzHmB9/88.jpg",
  },
  {
    id: 2,
    title: "Food",
    key: "Food",
    emoji: "🍗",
    image: "https://i.ibb.co.com/Vcg2X8rD/5.jpg",
  },
  {
    id: 3,
    title: "Accessories",
    key: "Accessories",
    emoji: "🦴",
    image: "https://i.ibb.co.com/xSqBFfsq/9.jpg",
  },
  {
    id: 4,
    title: "Care Products",
    key: "Care Products",
    emoji: "💊",
    image: "https://i.ibb.co.com/wN0jM2xn/Screenshot-480.png",
  },
];

const CategorySection = () => {
  return (
    <section className="py-14 px-4">
 
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Shop by Category
        </h2>
        <p className="text-gray-600 mt-2">
          Find everything your pet needs in one place.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {CATEGORY_DATA.map((cat) => (
          <Link
            key={cat.id}
            to={`/category-filtered-product/${cat.key}`}
            className="group"
          >
            <div className="relative h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer">

    
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

     
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

    
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">{cat.emoji}</span>
                  {cat.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
