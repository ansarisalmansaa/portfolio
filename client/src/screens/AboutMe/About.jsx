import javascript from "./image/javascript.png";
import html from "./image/html.png";
import css from "./image/css.png";
import rails from "./image/rails.png";
import swift from "./image/swift.png";
import react from "./image/react.png";
import java from "./image/java.png";
import mongodb from "./image/mongodb.png";
import android from "./image/android.png";
import python from "./image/python.png";
import wordpress from "./image/wordpress.png";
import nodejs from "./image/nodejs.png";
import git from "./image/git.png";
import Layout from "../Layout/layout";
function About() {
  return (
    <Layout>
      <div className="about-container">
        <div>
          <h1>About Me</h1>
          <p>My name is Salman Ansari and i am a Software Engineer</p>
        </div>
        <div></div>
        <h1>Skills</h1>
        <div>
          <img src={javascript} alt="java-img" />
          <img src={html} alt="javascript-img" />
          <img src={css} alt="" />
          <img src={rails} alt="" />
          <img src={swift} alt="" />
          <img src={react} alt="" />
          <img src={java} alt="" />
          <img src={mongodb} alt="" />
          <img src={android} alt="" />
          <img src={python} alt="" />
          <img src={wordpress} alt="" />
          <img src={nodejs} alt="" />
          <img src={git} alt="" />
        </div>
      </div>
    </Layout>
  );
}
export default About;
