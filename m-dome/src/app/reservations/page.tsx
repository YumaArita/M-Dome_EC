"use client";

import React from "react";
import { useUser } from "../context/UserContext";

const Reservations = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Reservations</h1>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in to make reservations.</p>
      )}
    </div>
  );
};

export default Reservations;
