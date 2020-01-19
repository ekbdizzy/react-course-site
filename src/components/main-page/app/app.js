import React, { Component } from 'react';

import Header from "../../header";
import Promo from "../promo";
import CourseList from "../course-list";
import Teachers from "../teachers";
import Advantages from "../advantages";
import Graduated from "../graduated";
import Footer from "../../footer";

import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Promo/>
                <CourseList/>
                <Teachers/>
                <Advantages/>
                <Graduated/>
                <Footer/>
            </div>
        );
    }
}
