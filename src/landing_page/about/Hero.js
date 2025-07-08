import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          I’m building impactful tech from the ground up.
          <br />
          This is just the beginning.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            I started this project with a clear vision — to build something
            meaningful that solves real problems using technology. With zero initial backing, I relied solely on my skills in full-stack development and product design.
          </p>
          <p>
            This platform reflects my dedication to clean UI/UX, performance-first architecture, and scalable backend systems.
          </p>
          <p>
            It's more than just code — it’s a learning journey, an experiment, and a step toward building solutions that can scale globally.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Alongside development, I believe in sharing knowledge through
            documentation, mentorship, and community learning. I actively contribute to open-source and technical forums to help others grow.
          </p>
          <p>
            I’m also passionate about exploring ideas in education, AI, and sustainable tech — areas where I believe innovation can have the most impact.
          </p>
          <p>
            You can follow my journey on my{" "}
            <a
              href="https://skillshow.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              blog
            </a>{" "}
            or check out my recent work on{" "}
            <a
              href="https://github.com/TejasriNoone"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
