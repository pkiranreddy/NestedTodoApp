import React, { useState, useRef } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const passwordRef = useRef();
  let history = useHistory();

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password })
    };
    fetch("https://reqres.in/api/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("authenticate", JSON.stringify(true));
          window.location.href = "/todo";
        } else alert("invalid user");
        setPassword("");
        setEmail("");
      });
  };
  const toggle = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      setVisible(true);
    } else {
      x.type = "password";
      setVisible(false);
    }
  };
  return (
    <div className="container p-0 m-0 w-100">
      <div className="image p-0 m-0 d-flex justify-content-center align-items-center flex-column">
        <img src="./switch.png" alt="switch On" className="img" />
        <h2 className="text-white">Assignments</h2>
      </div>
      <div className="login p-0 m-0 d-flex justify-content-center align-items-center flex-column">
        <h1>To- Do App</h1>
        <div className=" input-container d-flex m-3 p-1 w-70">
          <EmailOutlinedIcon color="disabled" className="align-self-center" />
          <input
            type="email"
            placeholder="Email ID"
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="ml-2 input flex-grow-1 Title"
          />
        </div>
        <div className="m-3 p-1 input-container w-70 d-flex">
          <LockOutlinedIcon color="disabled" className="align-self-center" />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input flex-grow-1 Title"
            id="myInput"
          />
          {!visible ? (
            <VisibilityOffIcon
              color="disabled"
              onClick={toggle}
              style={{ cursor: "pointer" }}
              className="align-self-center"
            />
          ) : (
            <VisibilityOutlinedIcon
              color="disabled"
              onClick={toggle}
              style={{ cursor: "pointer" }}
              className="align-self-center"
            />
          )}
        </div>

        <div
          onClick={handleSubmit}
          className="d-flex m-3 p-2 justify-content-center align-items-center flex-column w-70 text-white"
          style={{ backgroundColor: "rgb(74,174,96)", cursor: "pointer" }}
        >
          <h5>Login</h5>
        </div>
      </div>
    </div>
  );
};
