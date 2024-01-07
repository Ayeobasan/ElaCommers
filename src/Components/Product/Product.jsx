import React from "react";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";

const Product = () => {
  return (
    <div className="p-4">
      <div className="grid s:grid-cols-2 md:grid-cols-3 gap-4 ">
        {product.map((item) => (
          <ProductCart
            key={item.id}
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.qty}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
    </div> 
  );
};

export default Product;
