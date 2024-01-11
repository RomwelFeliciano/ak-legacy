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
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem);

  function addToCart(item, promoId) {
    console.log(item);

    const promo = promos.find((promo) => promo.promoId === promoId);

    console.log(promo, "asd");

    // If existing in the cart
    const existingItemIndex = cartItem.findIndex(
      (existingItem) =>
        existingItem.itemType === item.itemType &&
        existingItem.promoId === promoId
    );

    if (existingItemIndex !== -1) {
      // Item of the same type already exists in the cart for the same Promo
      const updatedCart = [...cartItem];
      console.log(updatedCart, "UPDATED CART HERE1111");
      updatedCart.splice(existingItemIndex, 1, {
        ...item,
        inCart: true,
        promoId,
      });
      setCartItem(updatedCart);
      console.log("Updated Item -- SWITCH");
      console.log(updatedCart, "UPDATED CART HERE222");
    } else {
      // Item doesn't exist, add it to the cart
      const oppositeType =
        item.itemType === "fruit"
          ? "protein"
          : item.itemType === "protein"
          ? "fruit"
          : null;

      const oppositeItemIndex = cartItem.findIndex(
        (existingItem) =>
          existingItem.itemType === oppositeType &&
          existingItem.promoId === promoId
      );

      console.log("Oppposite Item Index in Cart: ", oppositeItemIndex);

      if (oppositeItemIndex !== -1) {
        // Item of the opposite type exists in the cart for the same Promo, replace it
        const updatedCart = [...cartItem];
        updatedCart.splice(oppositeItemIndex, 1, {
          ...item,
          inCart: true,
          promoId,
        });
        setCartItem(updatedCart);
        console.log("Switched Type");
        console.log("Oppposite Item Index in Cart1: ", oppositeItemIndex);
      } else {
        // No item of the same or opposite type exists, add the new item
        console.log("Oppposite Item Index in Cart2: ", oppositeItemIndex);
        const newItem = { ...item, inCart: true, promoId };
        setCartItem([...cartItem, newItem]);
        console.log("Added Item");
      }
    }
  }

  function removeAllToCart() {
    setCartItem([]);
  }

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
