import { useState, useEffect } from "react";
import { getAllProjects } from "../../services/projects";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
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
      <a href="/add-project">Add Project</a>
      <div className="projects-container">
        <h1>My Projects</h1>
        {projects.map((project) => (
          <div className="project-id" key={project.id}>
            <div>
              <h1>{project.project_name}</h1>
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
