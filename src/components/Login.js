import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
const Login = () => {
  const context = useContext(noteContext);
  const { btn, setAlert } = context;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let history = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const responce = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });

    const json = await responce.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.token);

      setAlert("User logged in succesfully", "success");
      history("/");
    } else {
      setAlert("Invalid user details", "danger");
    }
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Login to continue Notebook </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            value={user.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            style={{
              backgroundColor: btn === "light" ? "white" : "#1a2027",
              color: btn === "light" ? "black" : "white",
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={user.password}
            style={{
              backgroundColor: btn === "light" ? "white" : "#1a2027",
              color: btn === "light" ? "black" : "white",
            }}
          />
        </div>

        <button type="submit" onClick={loginUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
