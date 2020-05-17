import React from "react";

function Servicios() {
  const servUno = "Reparación";
  const servDos = "Mantenimiento";
  const servTres = "Otros Servicios";
  const servCuatro = "Otros Servicios";

  return (
    <div className="services">
      <ul className="list">
        <li>{servUno}</li>
        <li>{servDos}</li>
        <li>{servTres}</li>
        <li>{servCuatro}</li>
      </ul>
      <div>
        <h3>{servUno}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia
          dolores similique iure non iusto ex tempora eveniet obcaecati mollitia
          modi quae magni enim incidunt, dolorum ratione voluptates nostrum
          illo!
        </p>
      </div>
      <div>
        <h3>{servDos}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          odio. Inventore neque natus amet dicta delectus laborum impedit minima
          enim optio quibusdam, possimus officia eveniet adipisci reprehenderit
          facilis voluptatem illo!
        </p>
      </div>
      <div>
        <h3>{servTres}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          consequatur error sequi atque dolore nemo recusandae quam natus
          exercitationem doloremque hic fuga ipsa quo possimus quas
          reprehenderit fugit repellendus illum.
        </p>
      </div>
      <div>
        <h3>{servCuatro}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          accusantium quis beatae architecto enim ad at provident voluptate
          assumenda a, quo dolor ab, veritatis doloremque ipsa reprehenderit!
          Amet, aspernatur in?
        </p>
      </div>
    </div>
  );
}

export default Servicios;
