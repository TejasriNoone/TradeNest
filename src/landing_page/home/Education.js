import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 text-center">
          <img
            src="images/education.svg"
            alt="Learning Resource"
            style={{ width: "70%" }}
          />
        </div>

        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and Open Tech Education</h1>
          <p>
            As part of my startup journey, I created beginner-to-advanced resources covering full-stack web development, system design, and interview prep — completely open and free for learners.
          </p>
          <a href="https://github.com/my-profile/tech-education" style={{ textDecoration: "none" }}>
            Explore Resources <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            I also maintain a discussion platform where students and professionals ask questions, share projects, and collaborate on coding and startup challenges.
          </p>
          <a href="https://community.myproject.com" style={{ textDecoration: "none" }}>
            Join the Forum <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
