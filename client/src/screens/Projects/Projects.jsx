import { useState, useEffect } from "react";
import { getAllProjects } from "../../services/projects";
import Layout from "../Layout/layout";
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
      <div className="projects-container">
        <h1>My Projects</h1>
        {projects.map((project) => (
          <div className="project-id" key={project.id}>
            <div>{project.project_name}</div>
            <div className="project-img-container">
              <img className="project-img" src={project.image_url} />
            </div>
            <div>
              <a href={project.github_url}>View Code</a>
            </div>
            <div>
              <a href={project.deploy_url}>View Website</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
