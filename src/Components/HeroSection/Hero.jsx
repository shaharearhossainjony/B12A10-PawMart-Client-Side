import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="w-full  py-20 px-6">
      <div className="max-w-6xl w-full text-center 
                  bg-white/20 backdrop-blur-md 
                  border border-white/30 
                  rounded-2xl p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to{" "}
          <span className="text-purple-600">
            <Typewriter
              words={["PawMart", "Your Pet's Paradise", "Best Pet Store"]}
              loop={0}        
              cursor
              cursorStyle="|"
              typeSpeed={80}  
              deleteSpeed={50} 
              delaySpeed={1500} 
            />
          </span>
        </h1>

        <p className="bg-gradient-to-r from-[#ff7f50] to-[#ffd700] text-transparent bg-clip-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          PawMart is your trusted place to adopt loving pets and buy essential 
          pet supplies. Explore thousands of listings, meet caring pet owners,
          and give your furry friends the life they deserve.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
