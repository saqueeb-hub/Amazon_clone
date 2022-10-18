import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123456"
            title="Redmi A1 (Black, 2GB RAM, 32GB Storage) "
            price={6299}
            rating={5}
            image="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
          />
          <Product
            id="123456"
            title="The Power of A Positive Attitude: Your Road To Success"
            price={200}
            rating={4}
            image="https://m.media-amazon.com/images/I/81JByBEqw+S._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="123456"
            title="Vintage Gulley Metal Idol Owl Set I Blue"
            price={699}
            rating={4}
            image="https://m.media-amazon.com/images/I/81shaXfqv5L._AC_SY200_.jpg"
          />
          <Product
            id="123456"
            title="Decore Basket SUN HORSES SMALL For Home "
            price={999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61O5HoaOjCS._SX466_.jpg"
          />
          <Product
            id="123456"
            title="Golden Wolf Laptop Bag,Business Anti "
            price={2199}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Z5Wx0WWyL._SX466_.jpg"
          />
          <Product
            id="123456"
            title="Acer Aspire 5 Gaming Intel Core i5 12th gen (12-Cores) "
            price={56990}
            rating={4}
            image="https://m.media-amazon.com/images/I/61gGtqfZFlL._SY450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="pTron Bullet Pro 36W PD Quick USB Charger, 3 Port Fast Car Charger Adapter - Compatible with All Smartphones & Tablets (Black)"
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/61aBH+cXL2L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="123456"
            title="Cezo 40X60 Magnification Zoom HD,Monocular Telescope for Adults and Children,High Power Telescope Gadget,Outdoor Telescope with Built-in Compass"
            price={899}
            rating={4}
            image="https://m.media-amazon.com/images/I/51WUHlne1FL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="123456"
            title="Fire-Boltt Ring Pro Bluetooth Calling, 1.75” 320*385px High Res, IP68 & SpO2 Monitoring, Pin Code Locking & Split Screen Access, Built in Mic & Speaker for HD Calls, Silver Grey, Free Size"
            price={2799}
            rating={4}
            image="https://m.media-amazon.com/images/I/61PW4LzsD2L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="Amazon Brand - Solimo XXXL Faux Leather Bean Bag Filled With Beans (Black and Brown)"
            price={1789}
            rating={4}
            image="https://m.media-amazon.com/images/I/61em4XfIdEL._SX466_.jpg"
          />
          <Product
            id="123456"
            title="Acco & Deco 2 Tier Wooden Multipurpose Turn-n-Tube Engineered Wood End Table Beside Sofa Side Table"
            price={279}
            rating={4}
            image="https://m.media-amazon.com/images/I/911uQooswYL._SX569_.jpg"
          />
          <Product
            id="123456"
            title="Dennis Lingo Men Casual Shirt"
            price={2799}
            rating={4}
            image="https://m.media-amazon.com/images/I/61a93+AuOBL._UX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456"
            title="Samsung 163 cm (65 inches) 4K Ultra HD Smart QLED TV QA65QN85AAKLXL (Silver)"
            price={80000}
            rating={5}
            image="https://m.media-amazon.com/images/I/81RrXp6615L._SX450_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
