import React from 'react';
//Components
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import RestaurantList from './RestaurantList';
import Search from './Search/'

//CSS
import './App.css';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';

function App() {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/:category" component={RestaurantList} />
      <Route path="/:category/:restaurantId" component={RestaurantDetails} /> 
      <Route exact path="/results" component={Search} />
      <Route component={Footer} />

    </BrowserRouter>

  );
}

export default App;
