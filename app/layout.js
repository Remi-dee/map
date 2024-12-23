"use client";

import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { satoshi } from "./localFonts/satoshi/localFont";
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
  rel="stylesheet"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${satoshi.variable} dark:bg-[#383544] antialiased`}>
        {" "}
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
