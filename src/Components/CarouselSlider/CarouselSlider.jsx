import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const HeroSlider = () => {
  const images = [
    "https://i.ibb.co.com/MyjFDSkD/download-13.jpg",
    "https://i.ibb.co.com/QvgX038s/download-12.jpg",
    "https://i.ibb.co.com/h1rLjjfG/images-3.jpg"
  ];

  const taglines = [
    "Find Your Furry Friend Today!",
    "Adopt, Don’t Shop — Give a Pet a Home.",
    "Because Every Pet Deserves Love and Care."
  ];

  return (
    <div className="pt-8 pb-8 px-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={img}
                className="w-full h-[420px] object-cover rounded-xl"
                alt="pet"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
              <h1 className="absolute top-1/2 left-10 -translate-y-1/2 text-3xl md:text-5xl font-bold text-amber-400 w-[70%] drop-shadow-lg">
                <Typewriter
                  words={[taglines[index]]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
