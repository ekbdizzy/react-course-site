import React, { Component } from "react";
import "./burger-menu.scss";

export default class BurgerMenu extends Component {

    state = {
        isActive: false
    };

    toggleMenu() {
        return this.props.toggleMenu;
    }

    toggleBurgerMenu = (e) => {
        e.preventDefault();
        this.props.toggleMenu();
        this.setState(({isActive}) => {
            return {isActive: !isActive}
        });
    };


    render() {
        const {isActive} = this.state;
        let classNames = isActive ? 'burger_menu__button burger_menu__active' : 'burger_menu__button';

        return (
            <div className="burger_menu">
                <a href="/"
                   className={classNames}
                   onClick={this.toggleBurgerMenu}>
                    <span className="burger_menu__lines"/>
                    <span className="burger_menu__lines"/>
                    <span className="burger_menu__lines"/>
                </a>
            </div>
        )
    }
}