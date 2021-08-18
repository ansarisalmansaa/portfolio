import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { getOneProject, updateProject } from "../../services/projects";
import "./Edit.css";
import Layout from "../Layout/Layout";

function Edit({ user }) {
  const [formData, setFormData] = useState({
    user_id: user?.id,
    project_name: "",
    description: "",
    image_url: "",
    github_url: "",
    deploy_url: "",
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const oneProject = await getOneProject(id);
      setFormData({
        ...oneProject,
      });
    };
    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      user_id: user?.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject(id, formData);
    history.push(`/detail/${id}`);
  };
  return (
    <Layout>
      <div className="edit-container">
        <h1>Edit Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="project_name">Project Name</label>
            <input
              id="name"
              name="project_name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.project_name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              id="desc"
              name="description"
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.description}
            />
          </div>
          <div>
            <label htmlFor="image_url">Image URL</label>
            <input
              id="img"
              name="image_url"
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.image_url}
            />
          </div>
          <div>
            <label htmlFor="github_url">Github URL</label>
            <input
              id="gh"
              name="github_url"
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.github_url}
            />
          </div>
          <div>
            <label htmlFor="deploy_url">Deploy URL</label>
            <input
              id="du"
              name="deploy_url"
              type="text"
              onChange={(e) => handleChange(e)}
              value={formData.deploy_url}
            />
          </div>
          <button id="edit-btn" type="submit">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Edit;
