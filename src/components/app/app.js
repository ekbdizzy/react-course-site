import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Main from "../main-page/main";
import Auth from "../auth";
import Footer from "../footer";
import CoursesPage from "../courses-page/courses-page";
import ApiService from "../../services/api-service";

import './app.scss';

export default class App extends Component {


    apiService = new ApiService();

    state = {
        authWindowStatus: false,
    };

    toggleAuthWindow = (e) => {
        e.preventDefault();
        if (this.state.authWindowStatus) {
            this.setState(({AuthWindowStatus}) => {
                document.body.style.overflow = "auto";
                return {authWindowStatus: false}
            })
        } else {
            this.setState(({AuthWindowStatus}) => {
                document.body.style.overflow = "hidden";
                return {authWindowStatus: true}
            })
        }
    };


    render() {
        const {authWindowStatus} = this.state;

        return (
            <Router>

                <div className={"App" + (authWindowStatus ? " overflow-hidden" : "")}>
                    <Auth authWindowStatus={authWindowStatus}
                          toggleAuthWindow={this.toggleAuthWindow}/>
                    <Header toggleAuthWindow={this.toggleAuthWindow}/>
                    <Route path="/"
                           component={Main}
                           exact/>
                    <Route path='/courses/:id?'
                           component={CoursesPage}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}
