import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        {/* Text Column */}
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Built on Trust & Simplicity</h1>

          <h2 className="fs-4">User-First Philosophy</h2>
          <p className="text-muted">
            I designed my platform with a focus on simplicity and trust. No dark patterns,
            just clean, efficient tools that genuinely help users grow.
          </p>

          <h2 className="fs-4">No Spam or Gimmicks</h2>
          <p className="text-muted">
            There are no annoying push notifications, no gamification tricks—just an honest,
            distraction-free experience for everyone.
          </p>

          <h2 className="fs-4">A Complete Ecosystem</h2>
          <p className="text-muted">
            My vision extends beyond one app. I built and integrated an ecosystem of tools
            and services that solve real-world problems for learners and developers.
          </p>

          <h2 className="fs-4">Do More, Learn Better</h2>
          <p className="text-muted">
            With thoughtful features like focus locks, goal reminders, and deep analytics,
            I help users stay on track with their growth and learning journey.
          </p>
        </div>

        {/* Image & Links Column */}
        <div className="col-6 p-5">
          <img src="images/ecosystem.png" style={{ width: "90%" }} alt="Ecosystem" />
          <div className="text-center mt-4">
            <a href="/products" className="mx-4" style={{ textDecoration: "none" }}>
              Explore my products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="/demo" style={{ textDecoration: "none" }}>
              Try live demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
