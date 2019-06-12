import React from 'react';
//Components
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Breakfast from './Breakfast/Breakfast';

//CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/breakfast/reviewId" component={Breakfast} /> 
      <Route component={Footer} />

    </BrowserRouter>

  );
}

export default App;
