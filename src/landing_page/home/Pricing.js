import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        {/* Introduction */}
        <div className="col-4">
          <h1 className="mb-3 fs-2">Simple & Transparent Pricing</h1>
          <p>
            I designed a fair, developer-first pricing model for my startup.
            It's flat, transparent, and has no hidden charges — built for students,
            learners, and early-stage developers.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            See Full Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer */}
        <div className="col-2"></div>

        {/* Pricing Cards */}
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-4 border rounded-3 shadow-sm">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free access to learning modules,
                <br />
                tools, and community support
              </p>
            </div>
            <div className="col p-4 border rounded-3 shadow-sm">
              <h1 className="mb-3">₹20</h1>
              <p>
                Premium features like AI-based prep,
                <br />
                advanced analytics & mentorship
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
