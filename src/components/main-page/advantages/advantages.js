import React from "react";
import './advantages.scss'

import adv_1 from '../../../assets/img/icon_people.png';
import adv_2 from '../../../assets/img/icon_partnership.png';
import adv_3 from '../../../assets/img/icon_blog.png';


function Advantages() {
    return (
        <section className="advantages">
            <div className="wrapper">
                <div className="advantages-list">

                    <div className="advantage">
                        <img src={adv_1} alt="Мероприятия"/>
                        <h4>Мероприятия</h4>
                        <p>Знакомство с преподавателем,<br/>
                            ответы на вопросы, интересные задачи</p>
                    </div>

                    <div className="advantage">
                        <img src={adv_2} alt="Мероприятия"/>
                        <h4>Программы лояльности</h4>
                        <p>И реферальные программы.<br/>
                            Как получить скидку?</p>
                    </div>

                    <div className="advantage">
                        <img src={adv_3} alt="Мероприятия"/>
                        <h4>Блог</h4>
                        <p>Сообщество студентов,<br/>
                            профессионалов и работодателей</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;
