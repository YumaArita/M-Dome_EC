"use client";

import React from "react";
import { useUser } from "../context/UserContext";

const GutStringing = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Gut Stringing Application</h1>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in to apply for gut stringing.</p>
      )}
    </div>
  );
};

export default GutStringing;
