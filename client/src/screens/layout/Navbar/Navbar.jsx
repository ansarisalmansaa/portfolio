
import { Link } from "react-router-dom";
import "./Navbar.css";
import Route from "react-router-dom";
import About from "../../AboutMe/About";
import { useState, useEffect } from "react";
import { verify } from "../../../services/user";

function Navbar() {
  
    const [userExist, setUserExist] = useState(null)

    useEffect(()=>{
        const checkSign = async()=>{
            const valid = await verify()
            setUserExist(valid ? true : false)
        }
        checkSign()
    },[])
  return (
    <div>
      <div>SA</div>
      <div>
          {userExist ? (<> <a href="/message">Message</a>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="">Contact</a>
         <Link to="/logout">Logout</Link></>)
        : <> <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="">Contact</a>
        <a href="/login">Login</a> </>}
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
