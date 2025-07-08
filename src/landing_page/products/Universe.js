import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Ecosystem I Explored</h1>
        <p>
          Through my research, I discovered an ecosystem of platforms built around Zerodha. Each one enhances trading, investing, or financial learning in a unique way.
        </p>

        {/* Partner Platform Cards */}
        <div className="col-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" alt="Smallcase" />
          <p className="text-small text-muted">Smallcase – thematic investing made simple</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/goldenPiLogo.png" alt="GoldenPi" />
          <p className="text-small text-muted">GoldenPi – access to bonds and fixed-income products</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/streakLogo.png" alt="Streak" />
          <p className="text-small text-muted">Streak – algo trading without writing a single line of code</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/sensibullLogo.png" alt="Sensibull" />
          <p className="text-small text-muted">Sensibull – options trading made smarter</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/tickertapeLogo.png" alt="Tickertape" />
          <p className="text-small text-muted">Tickertape – tools for screening stocks and ETFs</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/refinitivLogo.png" alt="Refinitiv" />
          <p className="text-small text-muted">Refinitiv – data and research for informed investing</p>
        </div>

        {/* CTA */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up & Explore
        </button>
      </div>
    </div>
  );
}

export default Universe;
