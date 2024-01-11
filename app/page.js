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

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem([...promoOne, ...promoTwo]);
  }, [promoOne, promoTwo]); // Update combinedArray whenever promoOne or promoTwo changes

  function addToCart(item, promoId) {
    console.log(promoId);
    if (promoId === 1) {
      const existingIndex = promoOne.findIndex(
        (existingItem) => existingItem.itemType === item.itemType
      );

      const oppositeType =
        item.itemType === "fruit"
          ? "protein"
          : item.itemType === "protein"
          ? "fruit"
          : null;

      if (existingIndex !== -1) {
        // Item exists, remove it from the cart
        const updatedCart = [...promoOne];
        updatedCart.splice(existingIndex, 1);
        setPromoOne(updatedCart);
      } else {
        // Item doesn't exist, add it to the cart
        const oppositeItemIndex = promoOne.findIndex(
          (existingItem) => existingItem.itemType === oppositeType
        );

        if (oppositeItemIndex !== -1) {
          const updatedCart = [...promoOne];
          updatedCart.splice(oppositeItemIndex, 1);
          setPromoOne([...updatedCart, { ...item, inCart: true }]);
        } else {
          const newItem = { ...item, inCart: true };
          setPromoOne([...promoOne, newItem]);
        }
      }
    } else if (promoId === 2) {
      const existingIndex = promoTwo.findIndex(
        (existingItem) => existingItem.itemType === item.itemType
      );

      const oppositeType =
        item.itemType === "fruit"
          ? "protein"
          : item.itemType === "protein"
          ? "fruit"
          : null;

      if (existingIndex !== -1) {
        // Item exists, remove it from the cart
        const updatedCart = [...promoTwo];
        updatedCart.splice(existingIndex, 1);
        setPromoTwo(updatedCart);
      } else {
        // Item doesn't exist, add it to the cart
        const oppositeItemIndex = promoTwo.findIndex(
          (existingItem) => existingItem.itemType === oppositeType
        );

        if (oppositeItemIndex !== -1) {
          const updatedCart = [...promoTwo];
          updatedCart.splice(oppositeItemIndex, 1);
          setPromoTwo([...updatedCart, { ...item, inCart: true }]);
        } else {
          const newItem = { ...item, inCart: true };
          setPromoTwo([...promoTwo, newItem]);
        }
      }
    }
  }

  function removeAllToCart() {
    setPromoOne([]);
    setPromoTwo([]);
  }

  console.log(cartItem);

  return (
    <main className="w-full grid grid-cols-12 min-h-screen">
      <div className="col-span-10 grid grid-cols-12 p-4">
        <Promo promos={promos} addToCart={addToCart} cartItem={cartItem} />
      </div>
      <div className="col-span-2 bg-white p-4 text-black">
        <Cart cartItem={cartItem} removeAllToCart={removeAllToCart} />
      </div>
    </main>
  );
}
