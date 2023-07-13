import React from 'react';
import './App.css';
import { Stars } from './components/ListStars';
import { TCountStars } from './components/models';

const countStars: TCountStars = 4;

function App() {
  return (
    <div className="App">
      <Stars count={countStars} />
    </div>
  );
}

export default App;
