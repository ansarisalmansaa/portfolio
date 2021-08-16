import "./App.css";
import Layout from "./screens/Layout/layout";
import { useEffect } from "react";
import { useState } from "react";
import { Route, useHistory } from "react-router";
import { login, logout } from "./services/user";
import { verify } from "./services/user";
import Login from "./screens/Login/Login";
import Projects from "./screens/Projects/Projects";
import Home from "./screens/Home/Home";
import About from "./screens/AboutMe/About";
import Message from "./screens/Message/Message"
function App() {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(loginForm);
    setUser(user);
    history.push("/");
  };
  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify();
      setUser(currentUser);
    };
    reverify();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push("/");
  };
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/message">
      <Message/>
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/login">
        <Login
          handleLogin={handleLogin}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
        />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
