import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Fintech Knowledge Portal</h4>
        <a href="">View Research Summary</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for a topic or browse what I’ve explored and learned
          </h1>
          <input placeholder="Eg. what is options trading" />
          <br />
          <a href="">Stock Market Fundamentals</a>
          <a href="">Futures & Options Explained</a>
          <a href="">Trading Platforms I Explored</a>
          <a href="">Understanding Market Orders</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Disruptive Models in Online Trading</a>
            </li>
            <li>
              <a href="">Beginner’s Guide to Algorithmic Strategies</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
