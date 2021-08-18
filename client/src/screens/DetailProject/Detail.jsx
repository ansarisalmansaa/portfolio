import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteProject, getOneProject } from "../../services/projects";
import Layout from "../Layout/Layout";
import { useHistory } from "react-router-dom";
import "./Detail.css";
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
    <div className="button-div">
      <Link id="btn" to={`/edit/${project.id}`}>
        Edit
      </Link>
      <button id="btn" onClick={(e) => handleDelete(e)}>
        Delete
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="p-container">
        <h1>Detail</h1>

        <div className="project-box" key={project.id}>
          <div className="img-container">
            <img
              className="project-img"
              src={project.image_url}
              alt={project.name}
            />
          </div>
          <div id="detail-name-container">
            <div>
              <h2>{project.project_name}</h2>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
            {user ? logedInButton : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Detail;
