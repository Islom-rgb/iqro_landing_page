import React from 'react'
import Navbar from './Navbar'
import '../static/css/header.css'
import head_img from '../static/images/header-image.png'


export default function Header() {
    return (
        <div className='main_head'>
            <Navbar />
            <div className='head'>
                <p className='head_title'>Разработка сайтов <br />
                    и мобильных приложений</p>
                <p className='head_subtitle'>
                    Помогаем бизнесу увеличить прибыль <br />
                    с помощью digital-инструментов
                </p>
                <img className='head_img' src={head_img} alt="" />
                <button className="head_btn">Обсудить проект</button>
            </div>
        </div>
    )
}
