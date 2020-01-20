import React from "react";
import './graduated.scss'

import logo_1 from '../../../assets/img/logo_1.png';
import logo_2 from '../../../assets/img/logo_2.png';
import logo_3 from '../../../assets/img/logo_3.png';
import logo_4 from '../../../assets/img/logo_4.png';
import logo_5 from '../../../assets/img/logo_5.png';
import logo_6 from '../../../assets/img/logo_6.png';

function Graduated() {
    return (
        <section className="graduated">
            <div className="wrapper">
                    <h1 className="title">Наших выпускников ждут:</h1>
                <div className="graduated-list">

                    <img src={logo_1} alt="logo_1"/>
                    <img src={logo_2} alt="logo_2"/>
                    <img src={logo_3} alt="logo_3"/>
                    <img src={logo_4} alt="logo_4"/>
                    <img src={logo_5} alt="logo_5"/>
                    <img src={logo_6} alt="logo_6"/>

                </div>
            </div>

        </section>

    )
}

export default Graduated;