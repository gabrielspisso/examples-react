import { useEffect, useState } from "react";
import React from "react";
import "./styles.css";

export default function Cuadradito(props) {
  const { contador } = props;
  const [pepe, setPepe] = useState("");
  useEffect(() => {
    let pepes = "";
    for (var i = 0; i < contador; i++) pepes += "pepe";
    setPepe(pepes);
    console.log("ME MONTE");

    return () => {
      console.log("ME DESMONTE");
    };
  }, [contador]);

  return <div className="cuadradito">{pepe}</div>;
}
