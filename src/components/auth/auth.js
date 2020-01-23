import React, { Component } from "react";
import "./auth.scss";

export default class Auth extends Component {

    state = {
        loginFormIsActive: true,
        regFormIsActive: false,
    };

    setActiveRegForm = (e) => {
        e.preventDefault();
        this.setState(({loginFormIsActive, regFormIsActive}) => {
            return {
                loginFormIsActive: false,
                regFormIsActive: true
            }
        });
    };

    setActiveLoginForm = (e) => {
        e.preventDefault();
        this.setState(({loginFormIsActive, regFormIsActive}) => {
            return {
                loginFormIsActive: true,
                regFormIsActive: false
            }
        });
    };


    render() {

        const {
            loginFormIsActive,
            regFormIsActive
        } = this.state;

        const {authWindowStatus, toggleAuthWindow} = this.props;

        const loginClassList = "login_form" + (loginFormIsActive ? ' active' : ''),
            regClassList = "registration_form" + (regFormIsActive ? ' active' : ''),
            authClassList = "auth" + (authWindowStatus ? '' : ' auth-hidden');

        return (
            <div className={authClassList}>
                <div id="close_auth"
                     onClick={(e) => toggleAuthWindow(e)}>X
                </div>
                <div className="entry_title">
                    <div className={"title" + (loginFormIsActive ? " title-active" : "")}
                         onClick={this.setActiveLoginForm}>Войти
                    </div>
                    <div className={"title" + (regFormIsActive ? " title-active" : "")}
                         onClick={this.setActiveRegForm}>Регистрация
                    </div>
                </div>

                <form className={loginClassList} action="">
                    <div className="form_field">
                        <label htmlFor="email">Электронная почта:</label>
                        <input className="input" type="email" id="email" placeholder="yourmail@mail.ru"
                               autoComplete="username"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="password">Пароль:</label>
                        <input className="input" type="password" id="password" placeholder="Пароль"
                               autoComplete="current-password"/>
                    </div>
                    <div className="form_field">
                        <button className="auth__button"
                                type="submit" id="login_form_btn">
                            Войти
                        </button>
                    </div>
                </form>

                <form className={regClassList} action="">
                    <div className="form_field">
                        <label htmlFor="reg_name">Ваше имя:</label>
                        <input className="input" type="text" id="reg_name" placeholder="Ваше имя"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="reg_email">Электронная почта:</label>
                        <input className="input" type="email" id="reg_email" placeholder="yourmail@mail.ru"
                               autoComplete="username"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="reg_password">Пароль:</label>
                        <input className="input" type="password" id="reg_password" placeholder="Пароль"
                               autoComplete="current-password"/>
                    </div>
                    <div className="form_field">
                        <input type="checkbox" id="reg_rules"/>
                        <label htmlFor="reg_rules">Согласен с условиями</label>
                    </div>
                    <div className="form_field">
                        <button className="auth__button"
                                type="submit" id="reg_form_btn">
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}