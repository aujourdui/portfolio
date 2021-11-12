import React from "react";
import { Link } from "react-router-dom";

const ProjectOnePage = () => (
  <div className="project-one">
    <h1>Project1</h1>
    <h2>Portfolio</h2>
    <p>This site</p>
    <div>
      <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
    </div>
  </div>
);

export default ProjectOnePage;
