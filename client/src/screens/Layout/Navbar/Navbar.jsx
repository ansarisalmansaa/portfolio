import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { verify } from "../../../services/user";
import { logout } from "../../../services/user";

import { useHistory } from "react-router-dom";

function Navbar() {
  const [userExist, setUserExist] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const checkSign = async () => {
      const valid = await verify();
      setUserExist(valid ? true : false);
    };
    checkSign();
  }, []);
  const handleLogout = () => {
    logout();
    setUserExist(null);
    history.push("/");
  };
  return (
    <div>
      <nav>
        <div id="logo">SA</div>
        <div id="nav-links">
          {userExist ? (
            <>
              {" "}
              <a href="/message">Message</a>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              {" "}
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="https://docs.google.com/document/d/1z1Lk5rO_AS-UQS_s3l8-mU5rhT7Pt7jL/edit?usp=sharing&ouid=115434653693469037059&rtpof=true&sd=true">
                Resume
              </a>
              <a href="/login">Login</a>{" "}
            </>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
