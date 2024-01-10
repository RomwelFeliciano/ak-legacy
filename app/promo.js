import React from "react";
import PromoItem from "./promoItem";

export default function Promo({ promos, addToCart }) {
  return (
    <div className="col-span-12 grid grid-cols-12">
      <PromoItem promos={promos} addToCart={addToCart} />
    </div>
  );
}
