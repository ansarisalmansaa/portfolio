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
      <div>SA</div>
      <div>
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
            <a href="/login">Login</a>{" "}
          </>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
