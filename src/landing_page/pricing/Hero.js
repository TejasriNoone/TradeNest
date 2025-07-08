import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          I made equity investing free and simplified trading with flat ₹20 pricing.
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="row p-5 mt-5 text-center">
        {/* Equity Delivery */}
        <div className="col-4 p-4">
          <img src="images/pricingEquity.svg" alt="Equity Delivery" />
          <h1 className="fs-3">Zero Brokerage on Equity</h1>
          <p className="text-muted">
            I enabled free investments in equity delivery (NSE, BSE) — ₹0 brokerage for all users.
          </p>
        </div>

        {/* Intraday Trades */}
        <div className="col-4 p-4">
          <img src="images/intradayTrades.svg" alt="Intraday & F&O" />
          <h1 className="fs-3">Intraday & F&O</h1>
          <p className="text-muted">
            I implemented a transparent ₹20 flat fee or 0.03% per order (whichever is lower)
            across intraday, currency, and commodity trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-4 p-4">
          <img src="images/pricingEquity.svg" alt="Mutual Funds" />
          <h1 className="fs-3">Zero-Cost Direct MFs</h1>
          <p className="text-muted">
            I support commission-free mutual fund investing — ₹0 in commissions or DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
