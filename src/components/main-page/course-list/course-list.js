import React from "react";
import './course-list.scss'


const CourseList = ({list}) => {
    const elements = list.map(({title, start_from, duration, link, image, id}) => {
        return (
            <div className="course" key={id}>
                <div className="course__info">
                    <h3 className="title">{title}</h3>
                    <a href={link} className="button">Подробнее</a>
                    <div>
                        <span>{start_from}</span>
                        <span>{duration}</span>
                    </div>
                </div>
                <img src={image} alt="course_1"/>
            </div>
        )
    });

    return (
        <section className='courses-list'>
            <div className='wrapper'>
                <h3 className="title">Популярные курсы</h3>
                <div className="courses">
                    {elements}
                </div>
            </div>
            <div className="align-center">
                <a href="/" className="button">Все курсы</a>
            </div>
        </section>
    )
};

export default CourseList;
