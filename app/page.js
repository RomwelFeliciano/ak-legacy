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
  const [promo, setPromo] = useState(promos);

  const [promoOne, setPromoOne] = useState([]);
  const [promoTwo, setPromoTwo] = useState([]);

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem([...promoOne, ...promoTwo]);
  }, [promoOne, promoTwo]); // Update combinedArray whenever promoOne or promoTwo changes

  function addToCart(item, promoId) {
    const findItemIndex = (promoArray, itemType) =>
      promoArray.findIndex(
        (existingItem) => existingItem.itemType === itemType
      );

    const oppositeType = item.itemType === "fruit" ? "protein" : "fruit";

    const handlePromo = (promoArray, setPromoArray, oppositeType) => {
      const existingIndex = findItemIndex(promoArray, item.itemType);

      if (existingIndex !== -1) {
        const updatedCart = [...promoArray];
        updatedCart.splice(existingIndex, 1);
        setPromoArray(updatedCart);
      } else {
        const oppositeItemIndex = findItemIndex(promoArray, oppositeType);

        if (oppositeItemIndex !== -1) {
          const updatedCart = [...promoArray];
          updatedCart.splice(oppositeItemIndex, 1);
          setPromoArray([...updatedCart, { ...item, inCart: true }]);
        } else {
          setPromoArray([...promoArray, { ...item, inCart: true }]);
        }
      }
    };

    if (promoId === 1) {
      handlePromo(promoOne, setPromoOne, oppositeType);
      setPromo([...promo, { ...item, inCart: true }]);
    } else if (promoId === 2) {
      handlePromo(promoTwo, setPromoTwo, oppositeType);
    }
  }

  // console.log(promoOne);
  // console.log(promoTwo);
  // console.log(cartItem, "asd");

  return (
    <main className="w-full grid grid-cols-12 min-h-screen">
      <div className="col-span-10 grid grid-cols-12 p-4">
        <Promo promos={promos} addToCart={addToCart} />
      </div>
      <div className="col-span-2 bg-white p-4 text-black">
        <Cart cartItem={cartItem} />
      </div>
    </main>
  );
}
