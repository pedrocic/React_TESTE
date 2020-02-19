import React, { useState } from 'react';
import logo from './assets/img/logo.svg'
import {Content, Global} from './react.style'
//import {Content, Global} from './styles' /* Estilo opcional, para utiliza-lo descomente a linha e comente a de baixo */


export default function App() {

    const [auth, setAuth] = useState({
        email: '',
        password: '',
        show: false
    });

    function changeEmail(email) {
        setAuth({
            ...auth,
            email: email
        })
    }

    function login() {
        setAuth({
            ...auth,
            show: true
        })
    }

    const name = auth.email.split("@");

    return (
        <Content>
            <Global/>
            <div id="main">
                { auth.show ? (
                    <header className="Main" id="content">
                        <img src={logo} className="Logo" alt="logo"/>
                        <h1>Bem vindo { name[0] }</h1>
                    </header>
                ) : (
                    <div className="Main" id="content">
                        <div >
                            <img src={logo} className="Logo" alt="logo"/>
                            <label className="Label" htmlFor="email">Email</label>
                            <input type={"email"}
                                   name="email"
                                   className="Input"
                                   value={auth.email}
                                   onChange={e => changeEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="Label" htmlFor="password">Senha</label>
                            <input type={"password"}
                                   name="password"
                                   className="Input"
                                   value={auth.password}
                                   onChange={e => setAuth({...auth, password: e.target.value})}
                            />
                        </div>
                        <div>
                            <button className="App-link" onClick={login}>
                                Logar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Content>
    );
}
