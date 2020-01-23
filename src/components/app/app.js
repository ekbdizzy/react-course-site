import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Main from "../main-page/main";
import Auth from "../auth";
import Footer from "../footer";

import './app.scss';

export default class App extends Component {

    state = {
        authWindowStatus: false,
    };

    toggleAuthWindow = (e) => {
        e.preventDefault();
        if (this.state.authWindowStatus) {
            console.log('osme');

            this.setState(({AuthWindowStatus}) => {
                return {authWindowStatus: false}
            })
        } else {
            this.setState(({AuthWindowStatus}) => {
                return {authWindowStatus: true}
            })
        }
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <Auth authWindowStatus={this.state.authWindowStatus}
                          toggleAuthWindow={this.toggleAuthWindow}/>
                    <Header toggleAuthWindow={this.toggleAuthWindow}/>
                    <Route path="/"
                           component={Main}
                           exact/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
