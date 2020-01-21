import React, { Component } from "react";
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
        return (
            <section className="header">
                <div className="wrapper">
                    <nav className="top_nav">
                        <BurgerMenu
                            toggleMenu={this.toggleMenuVisibility}/>
                        <a href="/" className="text_logo">
                            <h3 className='logo'>Авторские курсы</h3>
                        </a>
                        <Menu active={activeMenu}/>
                        <a href="/" id="login_btn" className="button">Вход и
                            регистрация</a>
                    </nav>
                </div>
            </section>
        )
    }
}

