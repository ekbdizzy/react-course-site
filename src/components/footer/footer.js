import React from "react";
import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-contain">
                    <a href="index.html" className="">
                        <h3 className="title title__white">Авторские курсы</h3>
                    </a>
                    <div className="footer__menu">
                        <a href="course_list.html">Курсы</a>
                        <a href="">События</a>
                        <a href="">О нас</a>
                        <a href="">Отзывы</a>
                        <a href="">FAQ</a>
                        <a href="">Контакты</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

