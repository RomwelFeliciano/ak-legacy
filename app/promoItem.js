import React from "react";

export default function PromoItem({ promos, addToCart }) {
  const handleAddToCart = (item, promoId) => {
    addToCart(item, promoId);
  };

  return (
    <>
      <div className="col-span-6">
        <h1>Promo {promos[0].promoId}</h1>
        <div className="flex flex-col gap-3 pt-3">
          {promos[0].items.map((item) => (
            <button
              className="bg-sky-700 hover:bg-sky-800 w-64 py-2 rounded-lg cursor-pointer"
              key={item.item}
              onClick={() => handleAddToCart(item, promos[0].promoId)}
            >
              {item.item} -- {item.itemType}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-6">
        <h1>Promo {promos[1].promoId}</h1>
        <div className="flex flex-col gap-3 pt-3">
          {promos[1].items.map((item) => (
            <button
              className="bg-sky-700 hover:bg-sky-800 w-64 py-2 rounded-lg cursor-pointer"
              key={item.item}
              onClick={() => handleAddToCart(item, promos[1].promoId)}
            >
              {item.item} -- {item.itemType}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
