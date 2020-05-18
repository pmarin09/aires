import React from "react";

function Solicitud() {

  function post(e){
    const form = new FormData(document.getElementById('reserva'));
    
    fetch('http://localhost:3000/appointments.json', {
      method: 'POST',
      body: form
    });
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="request">
      <h2>Reserve su visita</h2>
  
  <section className = "forms text-center border border-light p-5">
      <form className="form" onSubmit={post} id="reserva">
        <div className="form-row mb-4">
        <div className="col">
          Nombre:<input type = "text" name = "first_name" className="form-control"/>
          </div>
          <div className="col">
          Apellido:<input type = "text" name = "last_name" className="form-control"/>
          </div>
        </div>
        <div> Telefono: <input type="text" name="phone_number" className="form-control mb-4"/> </div>
        <div> Fecha: <input type="date" name="appointment_date" className="form-control mb-4"/> </div>
        <div><input type="time"name= "appointment_time" className= "form-control"/></div>
        <div> Tipo de Servicio: 
          <select id="service_type" name="service_type"> 
          <option value="" className="dropdown">  </option>
          <option value="Mantenimiento" className="dropdown" id="service_type"> Mantenimiento </option>
          <option value="Reparación" className="dropdown"> Reparación</option>
          <option value="Instalación" className="dropdown">Instalación</option>
          </select>
        </div>
        <div> Marca de Aire Acondicionado: 
          <select id="ac_brand" name="ac_brand"> 
          <option value="" className="dropdown" id="ac_brand">  </option>
          <option value="Samsung" name="Samsung" className="dropdown"> Samsung </option>
          <option value="LG" className="dropdown">LG</option>
          <option value="Panasonic" className="dropdown">Panasonic</option>
          <option value="Mabe" className="dropdown"> Mabe</option>
          <option value="Electrolux" className="dropdown"> Electrolux</option>
          <option value="Danki" className="dropdown">Danki</option>
          <option value="Midea" className="dropdown">Midea</option>
          </select>
        </div>
        
        <div> Cantidad de Aires Acondicionados: <input type="number" name="ac_qty"className="form-control mb-4" id="ac_qty"/> </div>
        <input type="submit" value="Hacer Reserva" className = "btn btn-primary btn-block"/>
      </form>
  </section>
  </div>
  
  );
}

export default Solicitud;
