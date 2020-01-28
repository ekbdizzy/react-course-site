import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import Main from "../main-page/main";
import Auth from "../auth";
import Footer from "../footer";
import CoursesPage from "../courses-page/courses-page";
import ProfilePage from "../profile-page";
import ApiService from "../../services/api-service";

import './app.scss';

export default class App extends Component {


    apiService = new ApiService();

    state = {
        authWindowStatus: false,
        isLoggedIn: false,
        token: null,
        user: null
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
                if (result.error) {
                    return alert(result.error);
                }
                localStorage.setItem('token', result['token']);
                this.setState({
                    isLoggedIn: true,
                    token: result.token
                });
            })
        ;
    };

    sergey = {
        "full_name": "Sergey",
        "email": "sergey@mail.ru",
        "password": "1"
    };

    postRegistrationForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => body[key] = value);
        this.apiService.login('/user/register/', body)
            .then((result) => {
                if (result.error) {
                    return alert(result.error);
                }
                alert(`${body.full_name}, поздравляем, вы зарегистрированы!
                Воспользуйтесь формой входа для доступа к личному кабинету`)
            })
    };


    userLogout = (e) => {
        e.preventDefault();
        this.setState(({isLoggedIn}) => {
            return {
                isLoggedIn: false,
                authWindowStatus: false,
            }
        });
        localStorage.removeItem('token');
    };


    updateProfile = (e, token = this.state.token, url = '/user/profile/') => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => body[key] = value);
        this.apiService.updateProfileData(url, body, token)
            .then((result) => {
                if (result.error) {
                    return alert(result.error);
                }
                console.log(result);
            })


    };


    render() {
        const {authWindowStatus, isLoggedIn, token} = this.state;

        return (
            <Router>
                <div className={"App" + (authWindowStatus ? " overflow-hidden" : "")}>
                    <Auth authWindowStatus={authWindowStatus}
                          toggleAuthWindow={this.toggleAuthWindow}
                          postLoginForm={this.postLoginForm}
                          postRegistrationForm={this.postRegistrationForm}
                          isLoggedIn={isLoggedIn}
                    />
                    <Header toggleAuthWindow={this.toggleAuthWindow}
                            isLoggedIn={isLoggedIn}
                            userLogin={this.userLogin}
                            userLogout={this.userLogout}
                    />
                    <Route path="/"
                           component={Main}
                        // component={ProfilePage}
                           exact/>
                    <Route path='/courses/:id?'
                           component={CoursesPage}/>

                    <Route path='/profile/'
                           render={() => (
                               <ProfilePage
                                   isLoggedIn={isLoggedIn}
                                   token={token}
                                   updateProfile={this.updateProfile}
                               />
                           )}
                    />

                    <Footer isLoggedIn={isLoggedIn}/>
                </div>
            </Router>
        );
    }
}
