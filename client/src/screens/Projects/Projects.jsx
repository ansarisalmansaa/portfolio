import { useState, useEffect } from "react";
import { getAllProjects } from "../../services/projects";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import "./Project.css";
import addImage from "./image/add.png";
function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);
  return (
    <Layout>
      <div className="project-main">
        <a id="add-btn" href="/add-project">
          <img src={addImage} alt="add-project" />
          Add
        </a>
      </div>
      <h1 id="project-head">My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-c" key={project.id}>
            <div>
              <h2>{project.project_name}</h2>
            </div>
            <div className="project-img-container">
              <img
                className="project-img"
                src={project.image_url}
                alt={project.name}
              />
            </div>
            <div>
              <a href={project.github_url}>View Code</a>
            </div>
            <div>
              <a href={project.deploy_url}>View Website</a>
            </div>
            <Link to={`/detail/${project.id}`}>Detail</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
