import React from "react";

function Solicitud() {
  const servUno = "Reparación";
  const servDos = "Mantenimiento";
  const servTres = "Otros Servicios";
  const servCuatro = "Otros Servicios";
  const marcaUno = "Marca uno";
  const marcaDos = "Marca dos";
  const marcaTres = "Marca tres";
  const marcaCuatro = "Marca cuatro";

  return (
    <div className="request">
      <h1>Reserve su visita</h1>
      <form className="form">
        <div className="aspect">
          <h4>Servicio requerido</h4>
          <div>
            <label>{servUno}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{servDos}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{servTres}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{servCuatro}</label>
            <input type="checkbox" />
          </div>
        </div>

        <div className="aspect">
          <h4>Marca de su equipo</h4>
          <div>
            <label>{marcaUno}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{marcaDos}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{marcaTres}</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>{marcaCuatro}</label>
            <input type="checkbox" />
          </div>
        </div>

        <div className="aspect">
          <label>Cantidad de equipos a reparar</label>
          <input type="number" />
        </div>

        <div className="aspect">
          <label>Fecha deseada</label>
          <input type="date" />
        </div>

        <div className="aspect">
          <label>Hora deseada</label>
          <input type="time" />
        </div>

        <button type="submit">Hacer Reserva</button>
      </form>
    </div>
  );
}

export default Solicitud;
