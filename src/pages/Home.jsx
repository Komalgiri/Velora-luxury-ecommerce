import React from 'react';
import Hero from '../components/Hero';
import WavyBanner from '../components/WavyBanner';
import Collections from '../components/Collections';
import NewArrivals from '../components/NewArrivals';
import BrandStory from '../components/BrandStory';
import BestSellers from '../components/BestSellers';
import WhyVelora from '../components/WhyVelora';
import Lookbook from '../components/Lookbook';
import Reviews from '../components/Reviews';
import Instagram from '../components/Instagram';
import Newsletter from '../components/Newsletter';
import AnimatedPage from '../components/AnimatedPage';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <WavyBanner />
      
      <ScrollReveal><Collections /></ScrollReveal>
      <ScrollReveal><NewArrivals /></ScrollReveal>
      <ScrollReveal><BrandStory /></ScrollReveal>
      <ScrollReveal><BestSellers /></ScrollReveal>
      <ScrollReveal><Lookbook /></ScrollReveal>
      <ScrollReveal><Reviews /></ScrollReveal>
      <ScrollReveal><Instagram /></ScrollReveal>
      
      <Newsletter />
    </AnimatedPage>
  );
};

export default Home;
