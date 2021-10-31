import React from 'react';
import './homepage.css';
// ========================== page component==========================
import Header from './Header/Header';
import OrderNow from './OrderNow/OrderNow';
import Categories from './Categories/Categories';
import BestSeller from './BestSeller/BestSeller';
import RatingList from './RatingList/RatingList';

function index() {
  return (
    <>
      <Header />
      <OrderNow />
      <Categories />
      <BestSeller />
      <RatingList />
    </>
  );
}

export default index;