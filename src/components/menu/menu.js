import React from "react";
import {Link} from "react-router-dom";
import './menu.scss';


export default class Menu extends React.Component {

    render() {

        const {active} = this.props;
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



                <a href='/'>Личный кабинет</a>
            </div>
        )
    }
}
