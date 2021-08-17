import "./Footer.css";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";

function Footer() {
  return (
    <footer>
      <div id="footer">© 2021 Salman Ansari</div>
      <div>
        <a href="https://github.com/ansarisalmansaa">
          <img src={github} alt="github-img" />
        </a>
        <a href="https://www.linkedin.com/in/salman-ansari-98b348217/">
          <img src={linkedin} alt="linkedin-img" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
