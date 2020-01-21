import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import Main from "../main-page/main";
import Footer from "../footer";

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route path="/"
                           component={Main}
                           exact/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
