import React from "react";
import "./App.css";
import Servicios from "./servicios.js";
import Solicitud from "./solicitud.js";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="titleOne">Nombre de la empresa</h1>
        <h2 className="titleTwo">Nuestros Servicios:</h2>
      </div>
      <div className="content">
        <Servicios />
        <Solicitud />
      </div>
    </div>
  );
}

export default App;
