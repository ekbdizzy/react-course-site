import React from "react";

import './promo.scss';

function Promo() {
    return (
        <section className="promo">
            <div className="wrapper">
                <div className="promo__slogan">
                    <h1>Авторские онлайн-курсы<br/>
                        для профессионалов</h1>
                    <a href="course_list.html"
                       className="button">
                        Посмотреть
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Promo;