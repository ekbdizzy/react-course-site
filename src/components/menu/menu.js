import React from "react";
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
                <a href="/">Курсы</a>
                <a href="/">События</a>
                <a href="/">О нас</a>
                <a href="/">Отзывы</a>
                <a href="/">FAQ</a>
                <a href="/">Контакты</a>
            </div>
        )
    }
}
