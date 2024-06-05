import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ style: "normal", weight: "400", subsets: ["latin"]});

export const metadata = {
  title: "Recipe Finder",
  description: "Find the best recipes for your next meal!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <link href="./globals.css" rel="stylesheet"/>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
