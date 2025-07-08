import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Column – Calculator Info */}
        <div className="col-8 p-4">
          <a href="/brokerage-calculator" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            style={{
              textAlign: "left",
              lineHeight: "2.2",
              fontSize: "14px",
            }}
            className="text-muted"
          >
            <li>
              I built a transparent brokerage model. Call & trade and RMS
              auto-squareoff incur an additional ₹50 + GST per order.
            </li>
            <li>
              Digital contract notes are sent via email — no extra paperwork.
            </li>
            <li>
              Physical copies of contract notes (if needed) are ₹20 each +
              courier.
            </li>
            <li>
              For NRI (non-PIS) accounts: 0.5% or ₹100 per executed order —
              whichever is lower.
            </li>
            <li>
              For NRI (PIS) accounts: 0.5% or ₹200 per executed order —
              whichever is lower.
            </li>
            <li>
              If the account is in debit, each order costs ₹40 instead of ₹20
              (risk-managed to protect platform integrity).
            </li>
          </ul>
        </div>

        {/* Right Column – Charges Info */}
        <div className="col-4 p-4">
          <a href="/charges" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">View All Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
