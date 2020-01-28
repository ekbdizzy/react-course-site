import React, { Component } from "react";
import './profile-page.scss';

import avatar from '../../assets/img/lana.jpg';
import knowledgeIcon from '../../assets/img/knowledges-icon.svg';
import sheduleIcon from '../../assets/img/shedule-icon.svg';
import kubernetesIcon from '../../assets/img/kubernetes_icon.svg'

export default class ProfilePage extends Component {


    state = {
        full_name: 'Lana Rhodes',
        email: 'admin@admin.ru'
    };

    handleChangeName(event) {
        this.setState({full_name: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }


    render() {

        const {full_name, email} = this.state;

        return (
            <div>
                <section className="profile-block">
                    <div className='wrapper'>

                        <div className='profile-docs'>
                            <div className="info">

                                <div className="photo">
                                    <h3>Личная информация</h3>
                                    <img src={avatar}/>
                                    <div className='edit-photo'>
                                        <a href="/#">Сменить фото</a>
                                        <a href="/#">удалить</a>
                                    </div>
                                </div>

                                <div className="profile-data">

                                    <form className=''>
                                        <div className="form_field">
                                            <input className="input"
                                                   value={full_name}
                                                   name="full_name"
                                                   type="text"
                                                   id="full_name"
                                                   autoComplete="username"
                                                   onChange={(e) => this.handleChangeName(e)}/>
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
                                <img src={knowledgeIcon}/>
                                <h2>У вас активных курсов: 2</h2>
                                <div className="shedule">
                                    <img src={sheduleIcon}/>
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

                            <div className="course">
                                <div className="course__info">
                                    <h3>Инфраструктурная платформа</h3>
                                    <div className="course__button">Перейти</div>
                                </div>
                                <img src={kubernetesIcon}/>
                            </div>

                            <div className="course">
                                <div className="course__info">
                                    <h3>Инфраструктурная платформа на основе Kubernetes</h3>
                                    <div className="course__button">Перейти</div>
                                </div>
                                <img src={kubernetesIcon}/>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        )
    }
}