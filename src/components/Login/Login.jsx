import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Login/Style.css";
import backgroundImage from "../../assets/Leonardo_Diffusion_A_realist_photo_for_a_electric_power_grid_a_1.jpg"
// import imgEdit from "../img/edit.ico";

export default function Usuarios() {
  // variaveis definidas para a interação com o banco de dados
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const url = "http://apibarbe-lucasop2.vercel.app/";

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  //funções para o funcionamento dos botoes
  function novosDados() {
    setTipo("novo");
  }
  function limparDados() {
    setId("");
    setNome("");
    setSobrenome("");
    setEmail("");
    setSenha("");
    setTipo("");
  }
  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email, sobrenome, senha } = usuario;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setSobrenome(sobrenome);
    setEmail(email);
    setSenha(senha);
  }

  //sera usado para atualização da lista pos edição
  function atualizaListaUsuarioEditado(response) {
    let { id } = response.data;
    const index = usuarios.findIndex((item) => item.id === id); // 7.3: pode ser alterado
    let users = usuarios;
    users[index].nome = nome;
    users[index].sobrenome = sobrenome;
    users[index].email = email;
    users[index].senha = senha;
    setUsuarios(users);
    limparDados("");
  }
  //sera usado para atualização da lista ao criar uma nova conta
  function atualizaListaComNovoUsuario(response) {
    let { id, nome, email, sobrenome, senha } = response.data[0];
    let obj = {
      id: id,
      nome: nome,
      email: email,
      sobrenome: sobrenome,
      senha: senha,
    }; 
    let users = usuarios;
    users.push(obj);
    setUsuarios(users);
    limparDados("");
  }
  //sera usada quando clicar em criar conta ou editar informações
  function gravarDados() {
    if (nome !== "" && sobrenome !== "" && email !== "" && senha !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "usuarios", {
            nome: nome,
            sobrenome: sobrenome, 
            email: email,
            senha: senha, 
          })

          .then((response) => atualizaListaComNovoUsuario(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "usuarios/" + id, {
            id: id,
            nome: nome,
            sobrenome: sobrenome, 
            email: email,
            senha: senha,
          })

          .then((response) => atualizaListaUsuarioEditado(response))
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  //Call Section: sera usado ao clicar no botao para aparecer a login-form & switch-case
  const [hidden, setHidden] = useState(true);
  const [showSwitchCase, setShowSwitchCase] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden);
    setShowSwitchCase(false); // Reseta o estado do showSwitchCase ao esconder a section
  };
  const toggleSwitchCase = () => {
    setShowSwitchCase(!showSwitchCase);
  };

  return (
    <div>
      <section id="btn-call">
        <button type="submit" onClick={toggleHidden}>
          Entrar/Cadastrar
        </button>
      </section>

      <section id="login-form" className={hidden ? "hidden" : ""}>
        <div className="img-fundo">
          <h1>
            Seus dados, sua conta: tenha tudo armazenado em um único lugar!
          </h1>
          <img src={backgroundImage} alt="Imagem de fundo" />
        </div>

        <div className="cadastro">
          <div className="cadastro-registro">
            <h1>CRIE UMA CONTA</h1>

            <div className="cadastro-input-1">
              <p>Nome:</p>
              <input
                type="text"
                name="txtNome"
                placeholder="nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </div>

            <div className="cadastro-input-2">
              <p>Sobrenome:</p>
              <input
                type="text"
                name="txtSobrenome"
                placeholder="sobrenome"
                value={sobrenome}
                onChange={(e) => {
                  setSobrenome(e.target.value);
                }}
              />
            </div>

            <div className="cadastro-input-3">
              <p>Email:</p>
              <input
                type="text"
                name="txtEmail"
                placeholder="email@exemplo"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="cadastro-input-4">
              <p>Senha:</p>
              <input
                type="text"
                name="txtSenha"
                placeholder="senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </div>

            <button type="button" onClick={novosDados}>
              Novo Perfil
            </button>
            <button type="button" onClick={limparDados}>
              Cancelar
            </button>
            <button type="button" onClick={gravarDados}>
              Gravar
            </button>

            <div className="switch">
              <p className="switch-question">Já possui uma conta?</p>
              <button
                type="submit"
                className={showSwitchCase ? "switch-case show" : "switch-case"}
                onClick={toggleSwitchCase}
              >
                LOGIN
              </button>
            </div>
          </div>

          {/* <div id="cadastro-login" className="hidden">
            <h1>ENTRE EM SUA CONTA</h1>
            <div className="cadastro-input-3">
              <p>Email:</p>
              <input
                type="text"
                name="txtEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            /* <div className="cadastro-input-4">
              <p>Senha:</p>
              <input
                type="text"
                name="txtSenha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </div> */}
        </div>

        {/* <div className="login-close">
          <button type="submit">X</button>
        </div> */}
      </section>

      {usuarios
        ? usuarios.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  {" "}
                  {item.id}-{item.nome}-{item.sobrenome}-{item.email}-
                  {item.senha}{" "}
                  {/* #edited: {item.id}-{item.nome}-{item.email}{" "} */}
                  <img
                    alt="Editar"
                    // src={imgEdit}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => editarDados(item.id)}
                  />
                </div>
              </div>
            );
          })
        : false}
    </div>
  );
}
