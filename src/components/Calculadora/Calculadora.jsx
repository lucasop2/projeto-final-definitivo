import { React, useState } from "react";
//import './App.css’;

export default function Contagem() {
  const [contador, setContador] = useState(0);
  const listaPessoas = ["Eugenio", "Fenícia", "Delphina", "Ada Byron"];
//   const url = 'https://jsonplaceholder.typicode.com/';

  function increment() {
    setContador(contador + 1);
  }
  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  return (
    <div>
      <h1>Teste de Contador (arq:calculadora)</h1>
      <p>{contador}</p>
      <button onClick={increment}>Incrementa Contador</button>
      <button onClick={decrement}>Decrementa Contador</button>

      <ul>
        {listaPessoas.map((item, indice) => {
          return <li key={indice}> {item} </li>;
        })}
      </ul>
    </div>
  );
}
