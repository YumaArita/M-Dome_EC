"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "../app/context/UserContext";

const Header = () => {
  const { user, logout } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-header_color text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-2xl font-bold">
        M-Dome
      </Link>
      <nav>
        <ul className="flex space-x-4">
          {user ? (
            <>
              <li>
                <Link href="/profile" className="hover:text-blue-300">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={logout} className="hover:text-blue-300">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-300">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
