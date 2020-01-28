import React, { Component } from "react";
import ApiService from "../../services/api-service";
import './courses-page.scss';

export default class CoursesPage extends Component {

    apiService = new ApiService();

    state = {
        courseList: null,
    };

    componentDidMount() {
        this.apiService.getCourseList()
            .then((courses) => {
                this.setState({
                    courseList: courses
                });
            })
    }

    componentWillUnmount() {
        this.setState({
            courseList: null
        });
    }


    renderItems(arr) {
        return arr.map((item) => {

            const {
                id, title, description, startDate,
                duration, icon
            } = item;

            return (
                <div className="course_item"
                     key={id}>
                    <div className="course_item__info">
                        <h3 className="title">{title}</h3>
                        <p className="course_item__text">{description}</p>
                        <a href="/" className="button">Перейти к курсу</a>
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
