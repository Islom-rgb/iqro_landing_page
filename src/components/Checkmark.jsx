import React from 'react'
import '../static/css/checkmark.css'
import checkmark from '../static/images/checkmark.png'
export default function Checkmark() {
    let checkmarks = ['Автоматизация бизнес-процессов', 'Привлечение новых клиентов', 'Увеличение прибыли',
        'Ускорение принятия решений', 'эффективности', 'Повышение лояльности',
    ]
    return (
        <div>
            <div className="work_body_container">
                <p className='checkmark_title black_title'>Что даст вашему бизнесу</p>
                <p className='checkmark_title'>Внердение Digitil-инструментов  </p>
                <div className="checkmark-boxes">
                    {
                        checkmarks.map(product => {
                            return (
                                <div key={product} className='checkmark-box'>
                                    <img src={checkmark} alt="checkmark" />
                                    <p>{product}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
