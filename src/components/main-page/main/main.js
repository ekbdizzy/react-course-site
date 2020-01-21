import React, { Component } from 'react';

import Promo from "../promo";
import CourseList from "../course-list";
import Teachers from "../teachers";
import Advantages from "../advantages";
import Graduated from "../graduated";


import course_1 from '../../../assets/img/course_1.png';
import course_2 from '../../../assets/img/course_2.png';
import course_3 from '../../../assets/img/course_3.png';
import course_4 from '../../../assets/img/course_4.png';

import './main.scss';

export default class Main extends Component {

    popularCourses = [
        {
            id: 1,
            title: "Инфраструктурная платформа на основе Kubernetes",
            link: "",
            image: course_1,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            id: 2,
            title: "Разработчик С++",
            link: "",
            image: course_2,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            id: 3,
            title: "Data Science",
            link: "",
            image: course_3,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        },
        {
            id: 4,
            title: "Веб-разработчик на Python",
            link: "",
            image: course_4,
            start_from: "c 3 декабря",
            duration: "5 месяцев",
        }
    ];


    render() {

        return (
            <div className="Main">
                <Promo/>
                <CourseList list={this.popularCourses}/>
                <Teachers/>
                <Advantages/>
                <Graduated/>
            </div>
        );
    }
}
