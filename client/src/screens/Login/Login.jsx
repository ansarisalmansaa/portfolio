import Layout from "../Layout/layout";

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
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

// import { useState } from "react";
// import { login } from "../../services/user";

// export default function Login(props) {
//   const { setUser } = props;
//   const [returnUser, setReturnUser] = useState({
//     username: "",
//     password: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setReturnUser({ ...returnUser, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const loginUser = () => {
//       const signedInUser = await login(returnUser);
//       setUser(signedInUser);
//     // };
//     loginUser();
//   };
//   return (
//       <div>
//     <h1>Login</h1>
//     <form onSubmit={handleSubmit()}>
//       <label htmlFor="">Username</label>
//       <input
//         onChange={(e) => handleChange(e)}
//         type="text"
//         name="username"
//         value={returnUser.username}
//         />
//       <label htmlFor="">password</label>
//       <input
//         onChange={(e) => handleChange(e)}
//         type="password"
//         name="password"
//         value={returnUser.password}
//         />
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );
// }
