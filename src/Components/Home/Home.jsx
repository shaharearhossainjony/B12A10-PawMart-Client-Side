import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import WhyAdoptFromPawMart from '../Extra section/WhyAdoptFromPawMart/WhyAdoptFromPawMart';
import MeetOurPetHeroes from '../Extra section/MeetOurPetHeroes/MeetOurPetHeroes';
import HeroSection from '../HeroSection/Hero';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import CategorySection from '../CategorySection/CategorySection';
import RecentListings from '../RecentListings/RecentListings';
import Loader from '../Loader/loader.jsx';

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);
  if (loading) return <Loader />;

  return (
    <div>
      <HeroSection />
      <CarouselSlider />
      <CategorySection />
      <RecentListings />
      <WhyAdoptFromPawMart />
      <MeetOurPetHeroes />
    </div>
  );
};

export default Home;
