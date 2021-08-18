import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProject } from "../../services/projects";
import Layout from "../Layout/Layout";
import "./AddProject.css";
export default function AddProject({ user }) {
  const [formData, setFormData] = useState({
    user_id: user?.id,
    project_name: "",
    description: "",
    image_url: "",
    github_url: "",
    deploy_url: "",
  });
  console.log(formData);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      user_id: user?.id,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(formData);
    history.push(`/projects`);
    console.log(formData);
  };

  return (
    <Layout>
      <div className="add-project">
        <div className="add-container">
          <h1>Add Form</h1>
          <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="project_name">Project Name</label>
              <input
                onChange={(e) => handleChange(e)}
                id="name"
                name="project_name"
                type="text"
                value={formData.project_name}
                className="add-input"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                onChange={(e) => handleChange(e)}
                id="desc"
                name="description"
                type="text"
                value={formData.description}
              />
            </div>
            <div>
              <label htmlFor="image-url">Image URL</label>
              <input
                onChange={(e) => handleChange(e)}
                id="img"
                name="image_url"
                type="text"
                value={formData.image_url}
              />
            </div>
            <div>
              <label htmlFor="gh-url">GitHub URL</label>
              <input
                onChange={(e) => handleChange(e)}
                id="gh-url"
                name="github_url"
                type="text"
                value={formData.github_url}
              />
            </div>
            <div>
              <label htmlFor="d_url">Deploy URL</label>
              <input
                onChange={(e) => handleChange(e)}
                id="d-url"
                name="deploy_url"
                type="text"
                value={formData.deploy_url}
              />
              <button className="add-form-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
