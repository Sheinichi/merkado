import { Route, Switch } from 'react-router-dom';

import AboutHome from './pages/AboutHome';
import BuyerInfo from './pages/BuyerInfo';
import Checkout from './pages/Checkout';
import HowToPage from './pages/HowToPage';
import Locate from './pages/Locate';
import Order from './pages/Order';
import Products from './pages/Products';
import SellerInfo from './pages/SellerInfo';
import SellerPage from './pages/SellerPage';
import UserLogin from './pages/UserLogin';
import UserRegistration from './pages/UserRegistration';

import MainNavigation from './layout/MainNavigation';
import React from 'react';

function App() {
 
  return (
  
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
         <Products/>
        </Route>
        <Route path='/buyerinfo'>
          <BuyerInfo/>
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
        <Route path='/howtopage'>
         <HowToPage/>
        </Route>
        <Route path='/locate'>
          <Locate/>
        </Route>
        <Route path='/order'>
          <Order/>
        </Route>
        <Route path='/Login'>
        <UserLogin/>
        </Route>
        <Route path='/sellerInfo'>
        <SellerInfo/>
        </Route>
        <Route path='/sellerPage'>
        <SellerPage/>
        </Route>
        <Route path='/userRegistration'>
          <UserRegistration/>
        </Route>
        <Route path='/AboutUs'>
          <AboutHome/>
        </Route>
      </Switch>

     
    </div>
    

  );

 

}

export default App;
