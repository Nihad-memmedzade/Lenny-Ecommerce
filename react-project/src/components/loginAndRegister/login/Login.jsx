import React from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../store/reducers/thunks/authThunk";
import { toast } from "react-toastify";

import "./login.scss";
function Login({ cStyle, setAuth }) {
  const dispath = useDispatch();

  const [data, setData] = React.useState({
    identifier: "",
    password: "",
  });

  function handleClickBtn() {
    setAuth((prev) => ({ ...prev, register: false, login: false }));
  }

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.identifier === "" || data.password === "") {
      console.log("error");
      toast.error(`Please fill all inputs`, {
        position: "bottom-right",
      });
      return;
    }

    console.log("sss");

    dispath(fetchLogin(data));
    handleClickBtn()
  };

  console.log(data, "looogiin");
  return (
    <div className={`login ${cStyle}`}>
      <p className="login-title">Log in</p>
      <form className="loginForm" onSubmit={handleSubmit}>
        <p className="loginName">Name</p>
        <input
          onChange={handleChange}
          name="identifier"
          className="loginInput"
          type="text"
          placeholder="Enter your name or mail"
          value={data.username}
        />

        <p className="loginName">Password</p>
        <input
          onChange={handleChange}
          name="password"
          className="loginInput"
          type="password"
          placeholder="Enter password"
          value={data.password}
        />

        <button className="loginBtn">Log in</button>
      </form>
    </div>
  );
}

export default Login;
