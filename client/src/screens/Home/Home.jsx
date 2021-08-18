import Layout from "../Layout/Layout";
import "./Home.css";
function Home() {
  return (
    <Layout>
      <div className="welcome-container">
        <h1>
          Hi, I'm <span>Salman Ansari</span>
        </h1>
        <h2>I'm a Software Engineer / Full-Stack Developer</h2>
        <p>Front End Developer / Back End Developer / WordPress</p>
        <br />
        <br />
        <a href="/projects">View Projects</a>
      </div>
    </Layout>
  );
}

export default Home;
