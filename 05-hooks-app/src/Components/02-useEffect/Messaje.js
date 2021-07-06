import React, { useEffect, useState } from "react";

export const Messaje = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  const moseMove = (e) => {
    const cords = { x: e.x, y: e.y };
    setcoords(cords);
    console.log(":D");
  };

  useEffect(() => {
    window.addEventListener("mousemove", moseMove);

    //   console.log("Componente montado");
    return () => {
      window.removeEventListener("mousemove", moseMove);
      // console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <p>Erres Genial</p>

      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};
