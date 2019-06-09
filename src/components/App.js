import React from 'react';
//Components
import Header from './Header';
import Slider from './Slider';
import SelectorHome from './SelectorHome';
import Footer from './Footer';

//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <SelectorHome/>
      <Footer/>
    </div>
  );
}

export default App;
