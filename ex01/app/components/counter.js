"use client";

import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  function handleClick() {
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
    console.log("novo valor = ", contador);
  }
  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={handleClick}>+</button>
    </div>
  );
}