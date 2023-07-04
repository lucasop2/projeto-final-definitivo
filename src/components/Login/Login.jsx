import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Login/Style.css";
import backgroundImage from "../../assets/Leonardo_Diffusion_A_realist_photo_for_a_electric_power_grid_a_1.jpg";
import backgroundImage2 from "../../assets/Leonardo_Diffusion_A_detailed_and_stylized_representation_of_a_0.jpg";
import ProfileIcon from "../../assets/profile_icon.svg";

export default function Usuarios() {
  // variaveis definidas para a interação com o banco de dados
  const [usuarioLogado, setUsuarioLogado] = useState("");
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
    const index = usuarios.findIndex((item) => item.id === id);
    let users = [...usuarios]; // Fazer uma cópia do array para evitar mutação direta
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
    let users = [...usuarios];
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
      } else if (tipo === "entrar") {
        authUser();
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  //Call Functions: chamada de elementos como login-page, switch-case & show-users
  const [hidden, setHidden] = useState(true);
  const [showSwitchCase, setShowSwitchCase] = useState(false);
  const [showCadastroLogin, setShowCadastroLogin] = useState(false);
  const [showUserProfile, setshowUserProfile] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

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
    setIsLogin(!isLogin);
  };
  const toggleUsers = () => {
    console.log("toggleUsers foi chamada");

    setShowUsers(!showUsers); // Função GET para mostrar usuarios do BD
  };
  const toggleProfile = () => {
    console.log("toggleProfile foi chamada");

    setshowUserProfile(!showUserProfile);  // Reseta o estado do setshowUserProfile ao esconder a section
  }

  //funções de usuario
  function authUser() {
    const usuario = usuarios.find((item) => item.email === email && item.senha === senha);
    if (usuario) {
      setUserFound(true);
      console.log("Usuário encontrado:", usuario);
      setUsuarioLogado(usuario.nome);
    } else {
      setUserFound(false);
      console.log("Usuário não encontrado");
      alert("Usuario não encontrado");
    }
  }  

  return (
    <div>
      <section id="btn-call-registro">
        {usuarioLogado ? (
          <div>
            {/* <img 
              alt="Icone de Perfil" 
              src={ProfileIcon} 
              height={30}
              width={30}
            /> */}
            <a href="#user-page"onClick={toggleProfile}>{usuarioLogado}</a>
          </div>
        ) : (
          <button
            type="submit"
            onClick={(e) => {
              toggleHidden();
              novosDados();
            }}
          >
            Entrar/Cadastrar
          </button>
        )}
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
            <button
              type="button"
              onClick={(e) => {
                gravarDados();
                toggleHidden();
                alert("Parabens! Sua conta foi registrada com sucesso, agora recarregue a pagina e entre em sua conta em SIGN UP");
              }}
            >
              Continue
            </button>
            <button type="button" onClick={limparDados}>
              Cancelar
            </button>
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
                value={email} // Verifica o tipo para decidir qual valor exibir
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
            <div className="controle-login">
              <button
                type="button"
                onClick={(e) => {
                  authUser();
                  toggleHidden();
                }}
              >
                Entrar
              </button>
              <button type="button" onClick={limparDados}>
                Cancelar
              </button>
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
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </div>

        <div className="login-close">
          <button type="submit" onClick={toggleHidden}>
            X
          </button>
        </div>
      </section>

      <section id="user-page" className={`${showUserProfile ? "" : "hidden"}`}>
      <div className="img-fundo">
          <h1>
          Seu espaço pessoal: organize suas informações em um único local!
          </h1>
          <img src={backgroundImage2} alt="Imagem de fundo" />
        </div>

        <div className="dados-usuario">
          <h1>Edite suas informações</h1>

          <div className="usuario-dados-nome">
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

          <div className="usuario-dados-email">
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

          <div className="usuario-dados-senha">
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

          <div className="controle-dados-usuario">
            <button
              type="button"
              onClick={(e) => {
                gravarDados();
                toggleProfile();
                alert("Para salvar as alterações, recarregue a pagina");
              }}
            >
              Salvar Alterações
            </button>
            <button
              type="button"
              onClick={(e) => {
                setUsuarioLogado("");
                toggleProfile();
              }}
            >
              Deslogar
            </button>
          </div>

          <div className="login-close">
          <button type="submit" onClick={toggleProfile}>
            X
          </button>
        </div>
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
                    {usuarioLogado === item.nome && <span>(Usuário Logado)</span>}
                    <img
                      alt="Editar"
                      // src={imgEdit}
                      id={item.id}
                      height={20}
                      width={20}
                      onClick={(e) => {
                        editarDados(item.id);
                        toggleHidden();
                      }}
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
