import React from "react";

export default function Cart({ cartItem, removeAllToCart }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <h1>My Cart</h1>
      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-3 pt-3">
          {cartItem.map((item) => (
            <li
              key={item.item}
              className="flex justify-between items-center bg-sky-400 px-2 py-2 rounded-lg capitalize"
            >
              {item.item} -- {item.itemType}
              <button className="bg-red-600 hover:bg-red-800 px-2 rounded-lg text-white cursor-pointer">
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-evenly gap-2">
          <button
            className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-lg"
            onClick={removeAllToCart}
          >
            Delete All
          </button>
          <button className="bg-green-600 hover:bg-green-800 text-white px-2 py-1 rounded-lg">
            Confirm All
          </button>
        </div>
      </div>
    </div>
  );
}
