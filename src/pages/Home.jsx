// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import SearchBox from '../components/SearchBox';
import Tags from '../components/Tags';

const Home = () => {
  return (
    <div className="home-container">
      <SearchBox />
      <Tags />
    </div>
  );
};

export default Home;
