import Layout from "../Layout/Layout";
import "./Login.css";
export default function Login({ handleLogin, loginForm, setLoginForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <Layout>
      <div className="login">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form" onSubmit={(e) => handleLogin(e)}>
            <div className="login-label-input">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="username"
                placeholder="username"
                value={loginForm.username}
              />
            </div>
            <div className="login-label-input">
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                placeholder="password"
                value={loginForm.password}
              />
            </div>
            <button id="login-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
