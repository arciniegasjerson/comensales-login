import React, { useState } from "react";

function Login({ Ingresar, error, auth }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  

  const submitHandler = (e) => {
    e.preventDefault();

    Ingresar(details);
  };

  return (
    <div className="container">
      <div className="container-titulo">
        <h1>Comensales</h1>
        <p>app</p>
      </div>
      <form className="form" onSubmit={submitHandler}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <input
          className="text-area"
          placeholder="Correo electronico..."
          type="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />

        <input
          className="text-area"
          placeholder=" Contraseña..."
          type="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <button className="btn">Ingresar</button>
        <p>¿Olvidaste tu contraseña?</p>
        <p>Registrarse</p>
      </form>
    </div>
  );
}

export default Login;
