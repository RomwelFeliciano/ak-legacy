"use client";

import { useState, useEffect } from "react";
import Cart from "./cart";
import Promo from "./promo";

const promos = [
  {
    promoId: 1,
    items: [
      {
        item: "mango",
        itemType: "fruit",
      },
      {
        item: "banana",
        itemType: "fruit",
      },
      {
        item: "tuna",
        itemType: "protein",
      },
      {
        item: "milk",
        itemType: "protein",
      },
      {
        item: "corn",
        itemType: "carb",
      },
      {
        item: "bread",
        itemType: "carb",
      },
    ],
  },
  {
    promoId: 2,
    items: [
      {
        item: "grape",
        itemType: "fruit",
      },
      {
        item: "apple",
        itemType: "fruit",
      },
      {
        item: "bangus",
        itemType: "protein",
      },
      {
        item: "egg",
        itemType: "protein",
      },
      {
        item: "rice",
        itemType: "carb",
      },
      {
        item: "potato",
        itemType: "carb",
      },
    ],
  },
];

export default function Home() {
  const [promoOne, setPromoOne] = useState([]);
  const [promoTwo, setPromoTwo] = useState([]);

  function addToCart(item) {
    const existingIndex = promoOne.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingIndex !== -1) {
      // Item exists, remove it from the cart
      const updatedCart = [...promoOne];
      updatedCart.splice(existingIndex, 1);
      setPromoOne(updatedCart);
    } else {
      // Item doesn't exist, add it to the cart
      setPromoOne([...promoOne, item]);
    }
  }

  console.log(promoOne);

  return (
    <main className="w-full grid grid-cols-12 min-h-screen">
      <div className="col-span-10 grid grid-cols-12 p-4">
        <Promo promos={promos} addToCart={addToCart} />
      </div>
      <div className="col-span-2 bg-white p-4 text-black">
        <Cart />
      </div>
    </main>
  );
}
