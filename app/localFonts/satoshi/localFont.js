import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "900",
      style: "black",
    },

    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },

    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export { satoshi };
