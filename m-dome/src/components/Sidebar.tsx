import React from "react";
import Link from "next/link";

const Sidebar = () => (
  <aside className="w-48 bg-gray-800 text-white h-screen flex-shrink-0">
    <nav>
      <ul>
        <li className="p-2">
          <Link href="/reservations" className="hover:text-blue-300">
            振替予約・欠席
          </Link>
        </li>
        <li className="p-2">
          <Link href="/gut-stringing" className="hover:text-blue-300">
            ガット張替え申し込み
          </Link>
        </li>
        <li className="p-2">
          <Link href="/product-hold" className="hover:text-blue-300">
            商品の取り置き
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
