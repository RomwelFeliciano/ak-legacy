import React from "react";

export default function PromoItem({ promos, addToCart }) {
  return (
    <>
      {promos.map((promo) => (
        <div className="col-span-12" key={promo.promoId}>
          <h1>Promo {promo.promoId}</h1>

          {/* Group buttons based on itemType */}
          {/* <div className="flex flex-col gap-3 pt-3">
            {promo.items.map((item) => (
              <button
                className={`w-64 py-2 rounded-lg cursor-pointer ${
                  item.inCart === true
                    ? "bg-red-700"
                    : "bg-sky-700 hover:bg-sky-800"
                }`}
                key={item.item}
                onClick={() => addToCart(item, promo.promoId)}
              >
                {item.item}
              </button>
            ))}
          </div> */}

          {/* Alternatively, you can group buttons based on itemType */}
          <div className="flex flex-col gap-3 pt-3">
            <h2>Fruits</h2>
            <div className="flex items-center gap-3">
              {promo.items
                .filter((item) => item.itemType === "fruit")
                .map((item) => (
                  <button
                    className={`w-64 py-2 rounded-lg cursor-pointer ${
                      item.inCart === true
                        ? "bg-red-700"
                        : "bg-sky-700 hover:bg-sky-800"
                    }`}
                    key={item.item}
                    onClick={() => addToCart(item, promo.promoId)}
                  >
                    {item.item}
                  </button>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-3">
            <h2>Proteins</h2>
            <div className="flex items-center gap-3">
              {promo.items
                .filter((item) => item.itemType === "protein")
                .map((item) => (
                  <button
                    className={`w-64 py-2 rounded-lg cursor-pointer ${
                      item.inCart === true
                        ? "bg-red-700"
                        : "bg-sky-700 hover:bg-sky-800"
                    }`}
                    key={item.item}
                    onClick={() => addToCart(item, promo.promoId)}
                  >
                    {item.item}
                  </button>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-3">
            <h2>Carbs</h2>
            <div className="flex items-center gap-3">
              {promo.items
                .filter((item) => item.itemType === "carb")
                .map((item) => (
                  <button
                    className={`w-64 py-2 rounded-lg cursor-pointer ${
                      item.inCart === true
                        ? "bg-red-700"
                        : "bg-sky-700 hover:bg-sky-800"
                    }`}
                    key={item.item}
                    onClick={() => addToCart(item, promo.promoId)}
                  >
                    {item.item}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
