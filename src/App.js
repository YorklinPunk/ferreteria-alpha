import './App.css';
import './layaouts/style.css'
import React from 'react';
import Header from './app/components/header';
import MiCarousel from './app/components/carousel';
import BodyList from './app/components/listasBody';
import Blog from './app/components/blog'

function App() {
  return (
    <div className="divHeader">
      <Header />
      <MiCarousel />
      <BodyList />
      <Blog />
    </div>
  );
}

export default App;
