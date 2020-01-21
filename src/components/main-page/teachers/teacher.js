import React from "react";
import './teacher.scss'

import teacher_1 from '../../../assets/img/teacher_1.png';
import teacher_2 from '../../../assets/img/teacher_2.png';
import teacher_3 from '../../../assets/img/teacher_3.png';
import be_teacher from '../../../assets/img/be_teacher.png';

function Teachers() {
    return (
        <section className="teachers">
            <div className='wrapper'>
                <h3 className="title">Преподаватели</h3>
                <div className="teachers-list">
                    <div className="teacher">
                        <img src={teacher_1} alt="teacher_icon"/>
                        <p>Егор Матешук<br/>
                            Senior Data Engineer, MaximaTelecom<br/>
                            Data Engineer</p>
                    </div>

                    <div className="teacher">
                        <img src={teacher_2} alt="teacher_icon"/>
                        <p>Людмила Карамышева<br/>
                            IT-Recruiter</p>
                    </div>

                    <div className="teacher">
                        <img src={teacher_3} alt="teacher_icon"/>
                        <p>Алина Янцен<br/>
                            IT-Recruiter</p>
                    </div>
                    <div className="teacher">
                        <a href="/" alt="Стать преподавателем">
                            <img src={be_teacher} id="be_teacher" alt="teacher_icon"/>
                        </a>
                        <p>Стать<br/>
                            преподавателем</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teachers;