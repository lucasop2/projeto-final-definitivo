import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Login/Style.css";
import backgroundImage from "../../assets/Leonardo_Diffusion_A_realist_photo_for_a_electric_power_grid_a_1.jpg";
// import imgEdit from "../img/edit.ico";

export default function Usuarios() {
  // variaveis definidas para a interação com o banco de dados
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const url = "https://apibarbe-lucasop2.vercel.app/";

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  //funções para o funcionamento dos botoes
  function novosDados() {
    setTipo("novo");

    console.log(tipo); // conferindo codigo
  }
  function limparDados() {
    setId("");
    setNome("");
    setEmail("");
    setSenha("");
    setTipo("");
  }
  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email, senha } = usuario;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
    setSenha(senha);

    console.log(tipo); //conferindo codigo
  }

  //sera usado para atualização da lista pos edição
  function atualizaListaUsuarioEditado(response) {
    let { id } = response.data;
    const index = usuarios.findIndex((item) => item.id === id); // 7.3: pode ser alterado
    let users = usuarios;
    users[index].nome = nome;
    users[index].email = email;
    users[index].senha = senha;
    setUsuarios(users);
    limparDados("");

    console.log(usuarios); //conferindo codigo
  }
  //sera usado para atualização da lista ao criar uma nova conta
  function atualizaListaComNovoUsuario(response) {
    let { id, nome, email, senha } = response.data[0];
    let obj = {
      id: id,
      nome: nome,
      email: email,
      senha: senha,
    };
    let users = usuarios;
    users.push(obj);
    setUsuarios(users);
    limparDados("");

    console.log(usuarios); //conferindo codigo
  }
  //sera usada quando clicar em criar conta ou editar informações
  function gravarDados() {
    if (nome !== "" && email !== "" && senha !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "usuarios", {
            nome: nome,
            email: email,
            senha: senha,
          })
          .then((response) => {
            atualizaListaComNovoUsuario(response);
            console.log(response); //conferindo codigo
          })
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "usuarios/" + id, {
            id: id,
            nome: nome,
            email: email,
            senha: senha,
          })
          .then((response) => {
              atualizaListaUsuarioEditado(response);
              console.log(response); //conferindo codigo
          })
          .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  //Call Functions: chamada de elementos como login-page, switch-case & show-users
  const [hidden, setHidden] = useState(true);
  const [showSwitchCase, setShowSwitchCase] = useState(false);
  const [showCadastroLogin, setShowCadastroLogin] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const toggleHidden = () => {
    console.log("toggleHidden foi chamada");

    setHidden(!hidden);
    setShowSwitchCase(false); // Reseta o estado do showSwitchCase ao esconder a section
    setShowCadastroLogin(false);  // Reseta o estado do showCadastroLogin ao esconder a section
  };
  const toggleSwitchCase = () => {
    console.log("toggleSwitchCase foi chamada");

    setShowSwitchCase(!showSwitchCase);
    setShowCadastroLogin(!showCadastroLogin);
  };
  const toggleUsers = () => {
    console.log("toggleUsers foi chamada");

    setShowUsers(!showUsers); // Função GET para mostrar usuarios do BD
  };

  return (
    <div>
      <section id="btn-call-registro">
        <button type="submit" onClick={toggleHidden}>
          Entrar/Cadastrar
        </button>
      </section>

      <section id="login-page" className={`${hidden ? "hidden" : ""}`}>
        <div className="img-fundo">
          <h1>
            Seus dados, sua conta: tenha tudo armazenado em um único lugar!
          </h1>
          <img src={backgroundImage} alt="Imagem de fundo" />
        </div>

        <div className="cadastro-registro">
          <h1>CRIE UMA CONTA</h1>

          <div className="cadastro-input-1">
            <p>Nome de Usuario:</p>
            <input
              type="text"
              name="txtNome"
              placeholder="username"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>

          <div className="cadastro-input-3">
            <p>Email:</p>
            <input
              type="text"
              name="txtEmail"
              placeholder="email@exemple"
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
              placeholder="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          
          <div className="controle-registro">
            <button type="button" onClick={novosDados}>Novo Perfil</button>
            <button type="button" onClick={gravarDados}>Gravar</button>
            <button type="button" onClick={limparDados}>Cancelar</button>
          </div>

          <p className="switch-question">Já possui uma conta?</p>
        </div>

        <div id="cadastro-login" className={`${showCadastroLogin ? "" : "hidden"}`}>
          <div className="cadastro-login-conteudo">  
            <h1>ENTRE EM SUA CONTA</h1>
            <div className="cadastro-input-3">
              <p>Email:</p>
              <input
                type="text"
                name="txtEmail"
                placeholder="email@exemple"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {" "}
            <div className="cadastro-input-4">
              <p>Senha:</p>
              <input
                type="text"
                name="txtSenha"
                placeholder="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
            </div>
            <div className="controle-login">
              <button type="button" onClick={novosDados}>Novo Perfil (logar)</button>
              <button type="button" onClick={limparDados}>Cancelar</button>
            </div>

            <p className="switch-question">Quer criar uma conta?</p>
          </div>
        </div>

        <div className="switch">
            <button
              type="submit"
              className={showSwitchCase ? "switch-case show" : "switch-case"}
              onClick={toggleSwitchCase}
            >
              LOGIN
            </button>
          </div>
        
        <div className="login-close">
          <button type="submit" onClick={toggleHidden}>
            X
          </button>
        </div>
      </section>

      {/* Esta seção está relacionada com a chamada dos usuarios do BD */}
      <section id="btn-call-usuarios">
        <button type="submit" onClick={toggleUsers}>
          Users
        </button>
      </section>  

      <section id="show-users" className={`${showUsers ? "" : "hidden"}`}>
        {usuarios
          ? usuarios.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    {" "}
                    {item.id}-{item.nome}-{item.email}-{item.senha}{" "}
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
      </section>
    </div>
  );
}
