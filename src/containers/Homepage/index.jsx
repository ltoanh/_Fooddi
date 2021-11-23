import React from 'react';
import './homepage.css';
// ========================== page component==========================
import Header from './Header/Header';
import OrderNow from './OrderNow/OrderNow';
import Categories from './Categories/Categories';
import BestSeller from './BestSeller/BestSeller';
import RatingList from './RatingList/RatingList';
import Delivery from './Delivery';

function index() {
  return (
    <>
      <Header />
      <OrderNow />
      <Categories />
      <BestSeller />
      <RatingList />
      <Delivery />
    </>
  );
}

export default index;