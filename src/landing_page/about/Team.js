import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">About Me</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <div className="p-3">
            <img
              id="founder-img"
              src="images/22mh1a05k1.jpg"
              alt="Tejasri Noone"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <h4 className="mt-4">Tejasri Noone</h4>
          <p className="text-secondary">Founder & Full-Stack Developer</p>
        </div>

        <div className="col-6 p-3">
          <p>
            I'm Tejasri Noone, the founder and full-stack developer behind this project. I built this platform from the ground up using technologies like React, Node.js, Express, and MongoDB.
          </p>
          <p>
            This project reflects my passion for creating scalable and meaningful tech products. I focus on clean UI/UX, robust architecture, and end-to-end delivery of full-stack applications.
          </p>
          <p>
            Beyond development, I enjoy exploring AI, contributing to open-source, and learning how technology can solve real-world problems.
          </p>
          <p>
            Connect with me:{" "}
            <a href="https://skillshow.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a> /{" "}
            <a href="https://github.com/TejasriNoone" target="_blank" rel="noreferrer">GitHub</a> /{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
