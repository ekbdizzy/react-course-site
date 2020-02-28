import React from "react";
import { Link } from "react-router-dom";
import './menu.scss';


const Menu = ({active, isLoggedIn}) => {

    let classNames = 'menu';
    if (active) {
        classNames += ' menu__active'
    }

    return (
        <div className={classNames}>
            <Link to="/courses/">Курсы</Link>
            <a href="/">События</a>
            <a href="/">О нас</a>
            <a href="/">Контакты</a>
            {isLoggedIn ? <Link to='/profile/'>Личный кабинет</Link> : ""}
        </div>
    )
};


export default Menu;