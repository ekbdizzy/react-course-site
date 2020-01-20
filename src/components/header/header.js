import React from "react";
import ReactDOM from 'react-dom';
import Menu from "../menu";
import './header.scss';

function Header() {
    return (
        <section className="header">
            <div className="wrapper">
                <nav className="top_nav">
                    <a href="#" className="text_logo">
                        <h3 className='logo'>Авторские курсы</h3>
                    </a>
                    <Menu/>
                    <a href="" id="login_btn" className="button">Вход и
                        регистрация</a>
                </nav>
            </div>
        </section>
    )
}

export default Header;