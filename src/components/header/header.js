import React, { Component } from "react";
import {Link} from "react-router-dom";
import BurgerMenu from "../burger-menu";
import Menu from "../menu";
import '../burger-menu';
import './header.scss';

export default class Header extends Component {

    state = {
        activeMenu: false
    };

    toggleMenuVisibility = () => {
        this.setState(({activeMenu}) => {
            return {activeMenu: !activeMenu}
        })
    };


    render() {
        const {activeMenu} = this.state;
        const {toggleAuthWindow, isLoggedIn, userLogout} = this.props;

        return (
            <section className="header">
                <div className="wrapper">
                    <nav className="top_nav">
                        <BurgerMenu
                            toggleMenu={this.toggleMenuVisibility}/>
                        <Link to="/" className="text_logo">
                            <h3 className='logo'>Авторские курсы</h3>
                        </Link>
                        <Menu active={activeMenu}
                              isLoggedIn={isLoggedIn}
                        />
                        {isLoggedIn ? <LogoutButton userLogout={userLogout}/>
                            : <AuthButton toggleAuthWindow={toggleAuthWindow}/>
                        }
                    </nav>
                </div>
            </section>
        )
    }
}

const AuthButton = ({toggleAuthWindow}) => {
    return (
        <React.Fragment>
            <a href="/" id="login_btn"
               className="button"
               onClick={toggleAuthWindow}>
                Вход и регистрация
            </a>
        </React.Fragment>
    )
};

const LogoutButton = ({userLogout}) => {
    return (
        <React.Fragment>
            <a href="/" id="login_btn"
               className="button"
               onClick={(e) => userLogout(e)}>
                Выйти
            </a>
        </React.Fragment>
    )
};