import React, { ReactNode } from "react";
import Link from "next/link";
import "../app/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-header_color text-white p-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-white text-2xl font-bold">M-Dome</a>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/login">
                  <a className="hover:text-blue-300">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a className="hover:text-blue-300">Sign Up</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex">
          <aside className="w-48 bg-gray-800 text-white h-screen flex-shrink-0">
            <nav>
              <ul>
                <li className="p-2">
                  <Link href="/reservations">
                    <a className="hover:text-blue-300">振替予約・欠席</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/gut-stringing">
                    <a className="hover:text-blue-300">ガット張替え申し込み</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/product-hold">
                    <a className="hover:text-blue-300">商品の取り置き</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
