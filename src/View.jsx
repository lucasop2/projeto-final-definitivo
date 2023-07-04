import React from 'react'
import "./Style.css"
import Login from "./components/Login/Login"
import Navbar from "./components/NavBar/Navbar"
import Calculadora from "./components/Principal/Calculadora"

export default function View() {
  return (
    <>
      <Navbar />
      <Login />
      <Calculadora />
    </>
  )
}
