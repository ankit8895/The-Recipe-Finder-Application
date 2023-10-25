import React from 'react';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Favourites from '../components/Favourites';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Details />
      <Favourites />
    </div>
  );
};

export default HomePage;
