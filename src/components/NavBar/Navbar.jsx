import React from 'react'
import "../NavBar/Style.css";
import backgroundImage3 from "../../assets/Leonardo_Diffusion_A_logotype_design_for_a_ThreePhase_Systems_3 (1).jpg";

export default function Navbar() {
  return (
    <div>
      <section id="header">
        <nav id="navigation-bar">
          <img src={backgroundImage3} className="web-logo" alt="logo" />
          <span className="menu-icon">Three-Phase Calculator</span>

          <ul className="nav-bar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>

        <div id="controle-horizontal">
          <ul className="controle-itens">
            <li><a href="#">Calculadora</a></li>
            <li><a href="#">Como Usar</a></li>
            <li><a href="#">Sobre Nós</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}