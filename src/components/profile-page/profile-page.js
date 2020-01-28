import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import './profile-page.scss';

import ApiService from "../../services/api-service";

import avatar from '../../assets/img/lana.jpg';
import knowledgeIcon from '../../assets/img/knowledges-icon.svg';
import sheduleIcon from '../../assets/img/shedule-icon.svg';

export default class ProfilePage extends Component {

    apiService = new ApiService();


    state = {
        full_name: '',
        email: '',
        courseList: []
    };

    handleChangeName(event) {
        this.setState({full_name: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }


    componentDidMount() {
        const {token} = this.props;

        if (!token) {
            return <Redirect to="/"/>
        }

        this.apiService.getProfileData('/user/profile/', token)
            .then((profile) => {
                const [coursesList, {full_name, email}] = profile;

                this.setState({
                        full_name: full_name,
                        email: email,
                        courseList: coursesList
                    }
                )
            })
    }

    renderCourses = (courseList) => {
        return courseList.map((course) => {
            const {id, title, icon} = course;
            return (
                <div className="course" key={id}>
                    <div className="course__info">
                        <h3>{title}</h3>
                        <div className="course__button">Перейти</div>
                    </div>
                    <img src={this.apiService._getImageUrl(icon)} alt={title}/>
                </div>
            )
        })
    };


    render() {
        const {full_name, email, courseList} = this.state;
        const {isLoggedIn, updateProfile} = this.props;

        const courses = this.renderCourses(courseList);

        if (!isLoggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <section className="profile-block">
                    <div className='wrapper'>

                        <div className='profile-docs'>
                            <div className="info">

                                <div className="photo">
                                    <h3>Личная информация</h3>
                                    <img src={avatar} alt={full_name}/>
                                    <div className='edit-photo'>
                                        <a href="/#">Загрузить фото</a>
                                        <a href="/#">удалить</a>
                                    </div>
                                </div>

                                <div className="profile-data">

                                    <form className=''
                                          onSubmit={(e) => updateProfile(e)}
                                    >
                                        <div className="form_field">
                                            <input className="input"
                                                   value={full_name}
                                                   name="full_name"
                                                   type="text"
                                                   id="full_name"
                                                   autoComplete="off"
                                                   onChange={(e) => this.handleChangeName(e)}
                                            />
                                        </div>
                                        <div className="form_field">
                                            <input className="input"
                                                   type="email"
                                                   name="email"
                                                   value={email}
                                                   autoComplete="off"
                                                   onChange={(e) => this.handleChangeEmail(e)}
                                            />
                                        </div>
                                        <div className="form_field">
                                            <button className="button"
                                                    type="submit"
                                                    id="profile_form_btn">
                                                Сохранить
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="courses-info">
                                <img src={knowledgeIcon} alt=''/>
                                <h2>У вас активных курсов: {courseList.length}</h2>
                                <div className="shedule">
                                    <img src={sheduleIcon} alt='Расписание'/>
                                    <span>Ближайшее занятие: 02.02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-courses'>
                    <div className="wrapper">
                        <h2>Мои курсы</h2>
                        <div className="courses-list">
                            {courseList.length ? courses : <p>Нет активных курсов</p>}
                        </div>

                        <div className='link-to-courses'>
                            <Link to="/courses/" className="link-to-courses">Все курсы</Link>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}



