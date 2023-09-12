import React, { useState } from 'react'
import '../static/css/navbar.css'
import headerLogoText from '../static/images/header-logo-text.png'
import headerLogo from '../static/images/header-logo.png'
export default function Navbar() {
    const [active, setActive] = useState('nav_menu')
    const changeActive = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')
    }
    return (
        <nav>
            <div className="branding">
                <img className='logo_img' src={headerLogo} alt="" />
                <img className='logo_img' src={headerLogoText} alt="" />
            </div>
            <div className={active}>
                <p className="nav_items">Услуги</p>
                <p className="nav_items">Как мы работаем</p>
                <p className="nav_items">Результат</p>
                <p className="nav_items">Заказать</p>
            </div>
            <div onClick={changeActive} className='nav_btn'>X</div>
        </nav>
    )
}
