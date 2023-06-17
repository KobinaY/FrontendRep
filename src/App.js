import React, { useState } from 'react';
import { Hero, DailyDeals, ExploreBestSelling, Footer, NewArrival, SignUp, WhatIsTrending, HolidaySale, SubNavbar, Navbar } from './components';
import './components/app.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
  <Navbar />
  <div className="spacer"></div>
  <SubNavbar />
  <div className="bgPrimary paddingX flexStart">
    <div className="boxWidth">
      <div></div>
        <Hero/>
      </div>
    </div>
    <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <ExploreBestSelling />
        <HolidaySale />
      </div>
    </div>
    <div className="bgPrimary paddingX flexStart">
      <div className="boxWidth">
        <WhatIsTrending />
        <NewArrival />
        <DailyDeals />
        <SignUp />
      </div>
    </div>
    <div className="bgPrimary flexStart">
      <div className="boxWidth">
        <Footer />
      </div>
    </div>
  </div>
  )
};

export default App;
