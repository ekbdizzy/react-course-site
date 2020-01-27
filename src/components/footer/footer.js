import React from "react";
import { Link } from "react-router-dom";
import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-contain">
                    <Link to="/" className="text_logo">
                        <h3 className="title title__white">Авторские курсы</h3>
                    </Link>
                    <div className="footer__menu">
                        <Link to="/courses/">Курсы</Link>
                        <a href="/">События</a>
                        <a href="/">О нас</a>
                        <a href="/">Отзывы</a>
                        <a href="/">FAQ</a>
                        <a href="/">Контакты</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

