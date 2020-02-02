import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./auth.scss";

export default class Auth extends Component {

    state = {
        loginFormIsActive: true,
        regFormIsActive: false,
        approveConditions: false
    };

    setActiveRegForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                loginFormIsActive: false,
                regFormIsActive: true
            }
        });
    };

    setActiveLoginForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                loginFormIsActive: true,
                regFormIsActive: false
            }
        });
    };

    approveConditionsToggle = () => {
        this.setState((state) => {
            console.log(!this.state.approveConditions);
            return {approveConditions: !this.state.approveConditions}
        })
    };


    render() {
        const {
            loginFormIsActive,
            regFormIsActive,
            approveConditions
        } = this.state;

        const {
            authWindowStatus,
            toggleAuthWindow,
            postLoginForm,
            postRegistrationForm,
            isLoggedIn
        } = this.props;

        const loginClassList = "login_form" + (loginFormIsActive ? ' active' : ''),
            regClassList = "registration_form" + (regFormIsActive ? ' active' : ''),
            authClassList = "auth" + (authWindowStatus ? '' : ' auth-hidden');

        if
        (isLoggedIn) {
            document.body.style.overflow = "auto";
            return <Redirect to="/"/>
        }

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

                <form className={loginClassList}
                      action=""
                      onSubmit={(e) => {
                          postLoginForm(e)
                      }}>
                    <div className="form_field">
                        <label htmlFor="email">Электронная почта:</label>
                        <input className="input"
                               name="email"
                               type="email"
                               id="email"
                               placeholder="yourmail@mail.ru"
                               autoComplete="username"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="password">Пароль:</label>
                        <input className="input"
                               type="password"
                               name="password"
                               id="password"
                               placeholder="Пароль"
                               autoComplete="current-password"/>
                    </div>
                    <div className="form_field">
                        <button className="auth__button"
                                type="submit"
                                id="login_form_btn">
                            Войти
                        </button>
                    </div>
                </form>

                <form className={regClassList}
                      action=""
                      onSubmit={(e) => {postRegistrationForm(e)}}>
                    <div className="form_field">
                        <label htmlFor="reg_name">Ваше имя:</label>
                        <input
                            className="input"
                            type="text"
                            name="full_name"
                            id="reg_name"
                            placeholder="Ваше имя"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="reg_email">Электронная почта:</label>
                        <input className="input"
                               type="email"
                               name="email"
                               id="reg_email"
                               placeholder="yourmail@mail.ru"
                               autoComplete="email"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="reg_password">Пароль:</label>
                        <input className="input"
                               type="password"
                               id="reg_password"
                               placeholder="Пароль"
                               name="password"
                               autoComplete="current-password"/>
                    </div>
                    <div className="form_field">
                        <input type="checkbox" id="reg_rules"
                               onClick={() => this.approveConditionsToggle()}/>
                        <label htmlFor="reg_rules">Согласен с условиями</label>
                    </div>
                    <div className="form_field">
                        <button className="auth__button"
                                disabled={!approveConditions}
                                type="submit" id="reg_form_btn">
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
