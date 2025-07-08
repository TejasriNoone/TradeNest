import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img
            src="images/largestBroker.svg"
            alt="Achievement Badge"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Milestones I’m Proud Of</h1>
          <p className="mb-5">
            Through this project, I’ve built a strong foundation in full-stack development, and achieved key goals like:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Developed scalable React components</p></li>
                <li><p>Implemented secure backend APIs</p></li>
                <li><p>Integrated MongoDB for data persistence</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Optimized for responsive design</p></li>
                <li><p>Deployed on Vercel & Render</p></li>
                <li><p>Built with performance & accessibility in mind</p></li>
              </ul>
            </div>
          </div>

          <img
            src="images/pressLogos.png"
            alt="Press Mentions or Tech Stack Logos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
