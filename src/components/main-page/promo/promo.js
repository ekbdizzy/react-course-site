import React from "react";
import {Link} from "react-router-dom";

import './promo.scss';

function Promo() {
    return (
        <section className="promo">
            <div className="wrapper">
                <div className="promo__slogan">
                    <h1>Авторские онлайн-курсы<br/>
                        для профессионалов</h1>
                    <Link to="/courses/"
                       className="button">
                        Посмотреть
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Promo;