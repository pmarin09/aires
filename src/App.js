import React from "react";
import "./App.css";
import Servicios from "./servicios.js";
import Solicitud from "./solicitud.js";
import NavImage from "./nav.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={NavImage} alt="air-conditioning"></img>
        <h1 className="titleOne">Nombre de la empresa</h1>
      </div>
      <div className="back">
        <div className="content">
          <Servicios />
          <Solicitud />
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default App;
