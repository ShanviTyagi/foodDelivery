import React, { useState } from "react";
import {useOfspatchCart,useCart} from './ContextReducer';

export const Card = ({ item, imgSrc }) => {
  
  const [quantity, setQuantity] = useState(1);
  const sizes = item.sizes || [];
  const [selectedSize, setSelectedSize] = useState(
    sizes.length > 0 ? sizes[0] : null
  );

  const handleAddToCart = () => {
    // as it is
  };

  const handleQuantityChange = (e) =>
    setQuantity(parseInt(e.target.value));

  const handleSizeChange = (e) => {
    const sizeObj = sizes.find(
      (s) => s.type === e.target.value
    );
    setSelectedSize(sizeObj);
  };

  const totalPrice = selectedSize
    ? selectedSize.price * quantity
    : 0;

  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src={imgSrc}
        alt={item.name}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">
          Rating: {item.rating || "N/A"} ⭐
        </p>

        {/* ROW 1: quantity + size + price */}
        <div className="d-flex align-items-center">
          <select
            className="me-2 h-100 bg-success text-white rounded"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="me-2 h-100 bg-success text-white rounded"
            value={selectedSize?.type || ""}
            onChange={handleSizeChange}
          >
            {sizes.map((s, index) => (
              <option key={index} value={s.type}>
                {s.type} - ₹{s.price}
              </option>
            ))}
          </select>

          <div className="fs-5">₹{totalPrice}</div>
        </div>

        {/* ROW 2: button */}
        <button
          className="btn btn-success w-100 mt-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
