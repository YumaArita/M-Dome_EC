"use client";

import React from "react";
import { useUser } from "../context/UserContext";

const ProductHold = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Product Hold</h1>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in to hold products.</p>
      )}
    </div>
  );
};

export default ProductHold;
