import React, { useState } from 'react'
import '../static/css/services.css'
import shape from '../static/images/Shape.png'
export default function Services() {
    let services = [
        { id: 1, text: 'Разработка сайтов' },
        { id: 2, text: 'Mобильные приложения' },
        { id: 3, text: 'Маркетинг продвижение' },
        { id: 4, text: 'Cмм продвижение' },
        { id: 5, text: 'CEO - оптимизация' },
        { id: 6, text: 'брендинг и айдентика' }
    ]
    const [id, setId] = useState(1)

    return (
        <div className="services_body_container">
            <p className='services_title'>Услуги</p>
            <div className='services_container'>
                <img onClick={() => id === 1 ? setId(6) : setId(id - 1)}
                    src={shape} className='btn' alt=""
                />
                {
                    services.map(product => {
                        return (
                            <div key={product.id}
                                className={`services_box ${id === product.id ? '' : "inactive"}`}>
                                <p className='services_subtitle'>
                                    {product.text}
                                </p>
                                <button className='services_btn'>Подробнее</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
