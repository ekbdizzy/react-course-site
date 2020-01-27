import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
        isLoggedIn: false,
        token: null,
        loginForm: null
    };


    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.setState({
                token: token,
                isLoggedIn: true
            });
        }
    }


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

    postLoginForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => body[key] = value);
        this.apiService.login('/user/login/', body)
            .then((result) => {
                console.log(result);
                localStorage.setItem('token', result['token']);
                this.setState({
                    isLoggedIn: true,
                    user: result
                });
            });
        return <Redirect to='/courses/'/>;
    };


    userLogout = (e) => {
        e.preventDefault();
        this.setState(({isLoggedIn}) => {
            console.log(!isLoggedIn);
            return {
                isLoggedIn: false
            }
        });
        localStorage.removeItem('token');
    };


    render() {
        const {authWindowStatus, isLoggedIn} = this.state;

        return (
            <Router>
                <div className={"App" + (authWindowStatus ? " overflow-hidden" : "")}>
                    <Auth authWindowStatus={authWindowStatus}
                          toggleAuthWindow={this.toggleAuthWindow}
                          postLoginForm={this.postLoginForm}
                    />
                    <Header toggleAuthWindow={this.toggleAuthWindow}
                            isLoggedIn={isLoggedIn}
                            userLogin={this.userLogin}
                            userLogout={this.userLogout}
                    />
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
