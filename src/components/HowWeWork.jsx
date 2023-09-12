import React, { useState } from 'react'
import '../static/css/howWeWork.css'

import searchIcon from "../static/images/search-icon.png"
import analys from "../static/images/analys.png"
import structure from "../static/images/structure.png"
import UIIcon from "../static/images/UI-icon.png"
import scaner from "../static/images/scaner.png"
import rocket from "../static/images/rocket.png"
export default function HowWeWork() {

    let howWeWork = [
        { id: 1, text: 'Исследование ниши и стратегия развития', image: searchIcon },
        { id: 2, text: 'Анализ конкурентов и юзабилити тесты', image: analys },
        { id: 3, text: 'Семантическая структура и оптимизация', image: structure },
        { id: 4, text: 'Прототипирование UI | UX дизайна для продукта', image: UIIcon },
        { id: 5, text: 'Разработка и верстка', image: scaner },
        { id: 6, text: 'Финальное тестирование и запуск продукта', image: rocket }
    ]
    return (
        <div>
            <div className="work_body_container">
                <p className='services_title'>Как мы работаем
                </p>
                <div className='work_container'>
                    {
                        howWeWork.map(product => {
                            return (
                                <div key={product.text} className='job-description-box-item'>
                                    <img src={product.image} alt="" />
                                    <p className='work_subtitle'>{product.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
