import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteProject, getOneProject } from "../../services/projects";
import Layout from "../Layout/layout";
import { useHistory } from "react-router-dom";

function Detail(props) {
  const { user } = props;

  const [project, setProjects] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchProjects = async () => {
      const oneProjects = await getOneProject(id);
      setProjects(oneProjects);
      console.log(oneProjects);
    };
    fetchProjects();
  }, [id]);
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProject(id);
    history.push("/projects");
  };
  const logedInButton = (
    <div>
      <Link to={`/edit/${project.id}`}>Edit</Link>
      <button onClick={(e) => handleDelete(e)}>Delete</button>
    </div>
  );

  return (
    <Layout>
      <div className="projects-container">
        <h1>Detail</h1>

        <div className="project-id" key={project.id}>
          <div className="project-img-container">
            <img
              className="project-img"
              src={project.image_url}
              alt={project.name}
            />
          </div>
          <div>
            <h2>{project.project_name}</h2>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
        {user ? logedInButton : null}
      </div>
    </Layout>
  );
}
export default Detail;
