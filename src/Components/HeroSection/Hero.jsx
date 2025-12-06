import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-purple-600">PawMart</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          PawMart is your trusted place to adopt loving pets and buy essential 
          pet supplies. Explore thousands of listings, meet caring pet owners,
          and give your furry friends the life they deserve.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
