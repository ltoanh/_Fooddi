import React from 'react';
import './homepage.css';
// ========================== page component==========================
import Header from './Header/Header';
import OrderNow from './OrderNow/OrderNow';
import Categories from './Categories/Categories';
import BestSeller from './BestSeller/BestSeller';

function index() {
  return (
    <>
      <Header />
      <OrderNow />
      <Categories />
      <BestSeller />
    </>
  );
}

export default index;