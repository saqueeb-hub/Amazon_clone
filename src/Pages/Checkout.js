import React, { Component, useState } from 'react';
import Header from '../Components/Header';
import { useStateValue } from '../Components/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className="checkout-header">
        <a className="back-btn" href="/">
          Back
        </a>
      </div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Consumables/Jupiter/NTASTore/SABS_1500x300_V2.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket Is Empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}

        {/* <Header /> */}
        {/* <Checkout /> */}
      </div>
    </>
  );
}

export default Checkout;
