import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProject } from "../../services/projects";
import Layout from "../Layout/layout";

function Detail(props) {
    const {user} = props;
    const [projects, setProjects] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
      const fetchProjects = async () => {
        const oneProjects = await getOneProject();
        setProjects(oneProjects);
      };
      fetchProjects();
    }, [id]);
    return (
      <Layout>
        
        <div className="projects-container">
          <h1>Detail</h1>
          {projects.map((project) => (
            <div className="project-id" key={project.id}>
              <div className="project-img-container">
                <img className="project-img" src={project.image_url} alt={project.name}/>
              </div>
              <div><h2>{project.project_name}</h2></div>
              <div><p>{project.description}</p></div>

          </div>
          ))}
        </div>
      </Layout>
    );
}
export default Detail;
