import React from 'react';
import WhyAdoptFromPawMart from '../Extra section/WhyAdoptFromPawMart/WhyAdoptFromPawMart';
import MeetOurPetHeroes from '../Extra section/MeetOurPetHeroes/MeetOurPetHeroes';
import HeroSection from '../HeroSection/Hero';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import CategorySection from '../CategorySection/CategorySection';
import RecentListings from '../RecentListings/RecentListings';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CarouselSlider></CarouselSlider>
      <CategorySection></CategorySection> 
      <RecentListings></RecentListings>   
      <WhyAdoptFromPawMart></WhyAdoptFromPawMart>
      <MeetOurPetHeroes></MeetOurPetHeroes>
    </div>
  );
};

export default Home;