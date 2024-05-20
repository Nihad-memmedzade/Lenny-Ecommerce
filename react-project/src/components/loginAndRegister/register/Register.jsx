import React from "react";
import "./register.scss";
import { register } from "../../../api/auth";
import { toast } from "react-toastify";


function Register({ cStyle, setAuth }) {

  const modalRef = React.useRef(null);

  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAuth((prev) => ({ ...prev, register: false, login: false }));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function navigateLogin() {
    setAuth((prev) => ({ ...prev, register: false, login: true }));
  }
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.username === "" || data.email === "" || data.password === "") {
      toast.error(`Please fill all inputs`, {
        position: "bottom-right",
      });
      return;
    }
    console.log("sss");
    const responseData = await register(data);

    if (responseData.jwt) {
      navigateLogin();
    }
  };

  return (
    <div ref={modalRef} className={`register ${cStyle}`}>
      <p className="register-title">Sign in</p>
      <form className="registerForm" onSubmit={handleSubmit}>
        <p className="registerName">Name</p>
        <input
          onChange={handleChange}
          name="username"
          className="registerInput"
          type="text"
          placeholder="Enter your name"
          value={data.username}
        />
        <p className="registerName">Phone Number or Email</p>
        <input
          onChange={handleChange}
          name="email"
          className="registerInput"
          type="text"
          placeholder="Enter Phone Number or Email"
          value={data.email}
        />
        <p className="registerName">Password</p>
        <input
          onChange={handleChange}
          name="password"
          className="registerInput"
          type="password"
          placeholder="Enter password"
          value={data.password}
        />
        {/* <p className="askLogin">Do you have account?</p> */}
        <button type="" className="registerBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
export default Register;
