import React from 'react';
//Components
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import RestaurantList from './RestaurantList';
import Search from './Search/'
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';
import HeaderLogged from './HeaderLogged/HeaderLogged';
import { userIsLoggedIn } from '../utils/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      { userIsLoggedIn()
        ? <Route component={HeaderLogged} />
        : <Route component={Header} />
      }

      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/restaurants/:category" component={RestaurantList} />
      <Route path="/restaurant/:restaurantId" component={RestaurantDetails} /> 
      <Route component={Footer} />

    </BrowserRouter>

  );
}

export default App;
