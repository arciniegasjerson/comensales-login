import React from "react";

function Inicio({ usuario, Logout }) {
  return (
    <div>
      <h1>Bienvenido, {usuario}</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Inicio;
