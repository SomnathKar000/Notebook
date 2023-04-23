import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";

const Signup = () => {
  const history = useNavigate();
  const context = useContext(noteContext);
  const { btn, setAlert } = context;
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const onSubmit = async (e) => {
    const host = window.location.origin;
    e.preventDefault();
    const responce = await fetch(host + "/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email,
      }),
    });
    const json = await responce.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      history("/");
      setAlert("Account created successfully", "success");
    } else {
      setAlert("Invalid credentials", "danger");
    }
  };

  return (
    <div className="container">
      <h2>Signup section</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Name
          </label>
          <input
            style={{
              backgroundColor: btn === "light" ? "white" : "#1a2027",
              color: btn === "light" ? "black" : "white",
            }}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={userInfo.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email1" className="form-label">
            Email address
          </label>
          <input
            style={{
              backgroundColor: btn === "light" ? "white" : "#1a2027",
              color: btn === "light" ? "black" : "white",
            }}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={userInfo.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            style={{
              backgroundColor: btn === "light" ? "white" : "#1a2027",
              color: btn === "light" ? "black" : "white",
            }}
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            value={userInfo.password}
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
