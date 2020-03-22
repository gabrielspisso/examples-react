import { useEffect, useState } from "react";
import React from "react";
import Cuadradito from "./cuadradito";
import "./styles.css";

export default function App2(props) {
  const { titulo } = props;

  const [contador, setContador] = useState(0);
  const [desmontado, setDesmontado] = useState(false);

  const cuadro = !desmontado ? <Cuadradito contador={contador} /> : null;

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <h2>{contador}</h2>
      <input
        type="button"
        value="PIPO"
        onClick={() => {
          setContador(contador + 1);
        }}
      />
      <input
        type="button"
        value="Montar/desmontar"
        onClick={() => {
          setDesmontado(!desmontado);
        }}
      />
      {cuadro}
    </div>
  );
}
