import Layout from "../Layout/Layout";
import { useState } from "react";
import { createMessage } from "../../services/contact";
import { useHistory } from "react-router-dom";

function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage(formData);

    setFormData({ formData });
    history.push("/");
  };

  return (
    <Layout user={props.user}>
      <div className="contact-container">
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <h1>Have Some Questions?</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={formData.email}
            />
            <label htmlFor="message">Message</label>
            <input
              name="message"
              type="text"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
export default Contact;
