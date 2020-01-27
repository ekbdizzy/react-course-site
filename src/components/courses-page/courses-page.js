import React, { Component } from "react";
import ApiService from "../../services/api-service";
import './courses-page.scss';

export default class CoursesPage extends Component {

    apiService = new ApiService();

    state = {
        courseList: null
    };

    componentDidMount() {
        this.apiService.getCourseList()
            .then((courses) => {
                this.setState({
                    courseList: courses
                });
                console.log(this.state);
            })
    }


    renderItems(arr) {
        return arr.map((item) => {

            const {
                id, title, description, startDate,
                price, duration, icon
            } = item;

            return (
                <div className="course_item"
                     key={id}>
                    <div className="course_item__info">
                        <h3 className="title">{title}</h3>
                        <p className="course_item__text">{description}</p>
                        <a href="" className="button">Перейти к курсу</a>
                        <div className="course_item__text">
                            <span>Старт: {startDate}</span>
                            <span>Продолжительность: {duration}</span>
                        </div>
                    </div>
                    <img src={icon} alt={title}/>
                </div>
            )
        })
    }

    render() {

        const {courseList} = this.state;

        if (!courseList) {
            return <h2>Loading</h2>
        }

        const items = this.renderItems(courseList);


        return (
            <div>
                <section className="page_title_block">
                    <h2 className="title title__white page_title">
                        Авторские онлайн‑курсы<br/>
                        для профессионалов
                    </h2>
                </section>

                <section className="content-block content-block__addon">
                    <div className='wrapper'>

                    {items}
                    </div>
                </section>

            </div>
        )
    }
}

// import axios from 'axios'
//
// const HOST = 'http://67.205.130.122',
//     COURSES_LIST_URL = `${HOST}/api/course/list`,
//     PAGE_TITLE = 'Список курсов';
//
// document.addEventListener("DOMContentLoaded", () => {
//     function getCoursesList() {
//
//         const title = document.querySelector('title'),
//             courses = document.querySelector('.courses');
//         if (title.innerText === PAGE_TITLE) {
//
//             try {
//                 axios.get(COURSES_LIST_URL, {}
//                 ).then(response => {
//                     response['data'].forEach(function (item) {
//                         const id = item.id,
//                             title = item.title,
//                             description = item.description,
//                             start_date = item.start_date,
//                             price = item.price,
//                             duration = item.duration,
//                             icon = `${HOST}${item.icon}`;
//
//                         courses.innerHTML += `
{/*        <div class="course_item">*/
}
{/*            <div class="course_item__info">*/
}
{/*                <h3 class="title title__course">${title}</h3>*/
}
{/*                <p class="course_item__text">${description}</p>*/
}
{/*                <a href="" class="main_page__button main_page__button-info">Перейти к курсу</a>*/
}
{/*                <div class="course_item__text">*/
}
{/*                    <span>Старт: ${start_date}</span>*/
}
{/*                    <span>Продолжительность: ${duration}</span>*/
}
{/*                </div>*/
}
{/*            </div>*/
}
{/*            <img src="${icon}" alt="${title}">*/
}
{/*        </div>`*/
}
{/*});*/
}
//                 }).catch((err) => {
//                     console.log("AXIOS: " + err);
//                     courses.innerHTML += `<h1>Ошибка загрузки с сервера, возможно проблема с CORS</h1>`
//                 });
//             } catch (err) {
//                 console.log("AXIOS: " + err);
//             }
//         }
//     }
//     getCoursesList();
// });


