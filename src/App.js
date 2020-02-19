import React, { useState } from 'react';
import {Content, Global} from './styles'

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
                    <div id="title">
                        <h1>Bem vindo { name[0] }!</h1>
                    </div>
                ) : (
                    <form id="content">
                        <div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type={"email"}
                                       name="email"
                                       value={auth.email}
                                       onChange={e => changeEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Senha</label>
                                <input type={"password"}
                                       name="password"
                                       value={auth.password}
                                       onChange={e => setAuth({...auth, password: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <button onClick={login}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </Content>
    );
}
