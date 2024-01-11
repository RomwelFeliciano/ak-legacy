import React from "react";

export default function Cart({ cartItem }) {
  return (
    <div>
      <h1>
        My Cart
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
      </h1>
    </div>
  );
}
