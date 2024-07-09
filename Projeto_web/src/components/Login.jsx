import React from "react"
import "./style/CreateUser.css";

const Login = () => {
    return (
        <div className="wrapper">
        <div className="h1-centro">
          <h1>Bem vindo ao FutBR</h1>
        </div>
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              {/* Adicione o conteúdo da imagem ou outros componentes aqui */}
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <header>Login</header>
                <div className="input-field">
                  <input type="text" className="input" id="email" required autoComplete="off" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input type="password" className="input" id="password" required />
                  <label htmlFor="password">Senha</label>
                </div>
                <div className="input-field">
                  <input type="submit" className="submit" value="Entrar" />
                </div>
                <div className="signin">
                  <span>Não possui uma conta? <a href="#">Registre-se aqui</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login