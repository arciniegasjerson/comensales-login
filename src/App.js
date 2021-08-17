import "./App.css";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Home from "./components/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const adminUser = {
    email: "arciniegasjerson@gmail.com",
    password: "adminadmin",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Ingresar = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.email,
      });
      setError("");
    } else {
      setError("¡Usuario o contraseña incorrectos!");
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          {user.email === "" ? (
            <Route exact path="/login">
              <Login Ingresar={Ingresar} error={error} />
            </Route>
          ) : (
            <Route>
              <Inicio Logout={Logout} usuario={user.email} />
            </Route>
          )}
          <Route exact path="/">
            <Link to="/login">
              <Home />
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
