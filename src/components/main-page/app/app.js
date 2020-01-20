import React, { Component } from 'react';

import Header from "../../header";
import Promo from "../promo";
import CourseList from "../course-list";
import Teachers from "../teachers";
import Advantages from "../advantages";
import Graduated from "../graduated";
import Footer from "../../footer";


import course_1 from '../../../assets/img/course_1.png';
import course_2 from '../../../assets/img/course_2.png';
import course_3 from '../../../assets/img/course_3.png';
import course_4 from '../../../assets/img/course_4.png';

import './app.scss';

export default class App extends Component {


    popularCourses = [
        {
            title: "Инфраструктурная платформа на основе Kubernetes",
            link: "",
            image: course_1,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            title: "Разработчик С++",
            link: "",
            image: course_2,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            title: "Data Science",
            link: "",
            image: course_3,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            title: "Веб-разработчик на Python",
            link: "",
            image: course_4,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        }
    ];


    render() {
        return (
            <div className="App">
                <Header/>
                <Promo/>
                <CourseList list={this.popularCourses}/>
                <Teachers/>
                <Advantages/>
                <Graduated/>
                <Footer/>
            </div>
        );
    }
}
