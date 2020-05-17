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
            <label for="sUno">{servUno}</label>
            <input id="sUno" type="checkbox" />
          </div>
          <div>
            <label for="sDos">{servDos}</label>
            <input id="sDos" type="checkbox" />
          </div>
          <div>
            <label for="sTres">{servTres}</label>
            <input id="sTres" type="checkbox" />
          </div>
          <div>
            <label for="sCuatro">{servCuatro}</label>
            <input id="sCuatro" type="checkbox" />
          </div>
        </div>

        <div className="aspect">
          <h4>Marca de su equipo</h4>
          <div>
            <label for="mUno">{marcaUno}</label>
            <input id="mUno" type="checkbox" />
          </div>
          <div>
            <label for="mDos">{marcaDos}</label>
            <input id="mDos" type="checkbox" />
          </div>
          <div>
            <label for="mTres">{marcaTres}</label>
            <input id="mTres" type="checkbox" />
          </div>
          <div>
            <label for="mCuatro">{marcaCuatro}</label>
            <input id="mCuatro" type="checkbox" />
          </div>
        </div>

        <div className="aspect">
          <label for="cuantos">Cantidad de equipos a reparar</label>
          <input id="cuantos" type="number" />
        </div>

        <div className="aspect">
          <label for="cuando">Fecha deseada</label>
          <input id="cuando" type="date" />
        </div>

        <div className="aspect">
          <label for="hora">Hora deseada</label>
          <input id="hora" type="time" />
        </div>

        <button className="btn" type="submit">
          Hacer Reserva
        </button>
      </form>
    </div>
  );
}

export default Solicitud;
