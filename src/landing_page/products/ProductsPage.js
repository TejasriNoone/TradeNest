import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="images/kite.png"
        productName="Kite"
        productDesription="I built Kite as an ultra-fast flagship trading platform with live market data, advanced charts, and a smooth UI. It's fully optimized for both Android and iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="images/console.png"
        productName="Console"
        productDesription="I designed Console to be the central dashboard for Zerodha users. It provides deep insights into trades and investments via advanced reports and visualizations."
        learnMore=""
      />

      <LeftSection
        imageURL="images/coin.png"
        productName="Coin"
        productDesription="I developed Coin to let users invest in direct mutual funds online with zero commission. It integrates with Demat accounts and runs seamlessly on mobile devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="I built the Kite Connect API so developers and startups can create powerful trading platforms with simple HTTP/JSON APIs. It empowers fintech innovation at scale."
        learnMore=""
      />

      <LeftSection
        imageURL="images/varsity.png"
        productName="Varsity mobile"
        productDesription="I created Varsity mobile as a bite-sized learning platform for stock market education. Its illustrated lessons help users learn on-the-go with ease and clarity."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        Curious about how I architected the infrastructure? Check out the{" "}
        <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer">
          Zerodha.tech blog
        </a>{" "}
        where I document my engineering choices.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;
