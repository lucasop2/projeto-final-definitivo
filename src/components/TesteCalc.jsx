import React, { useState } from 'react'

export default function TesteCalc() {
    const [radiosSelecionados, setRadiosSelecionados] = useState([]);

    function deselecionarRadios() {
      setRadiosSelecionados([]);
    }
  
    return (
      <div>
        <input
          type="radio"
          checked={radiosSelecionados.includes("opcao1")}
          onChange={() => setRadiosSelecionados(["opcao1"])}
        />
        <input
          type="radio"
          checked={radiosSelecionados.includes("opcao2")}
          onChange={() => setRadiosSelecionados(["opcao2"])}
        />
  
        <button onClick={deselecionarRadios}>Deselecionar</button>
      </div>
    );
  }