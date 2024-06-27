import React from "react";
import { UserProvider } from "./context/UserContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-grow p-4">{children}</main>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
