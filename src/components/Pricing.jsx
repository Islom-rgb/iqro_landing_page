import React, { useState } from 'react'
import '../static/css/pricing.css'
import success from '../static/images/Outline Success.png'
export default function Pricing() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const handleNum = event => {
        setNumber(event.target.value);
    };
    const handleName = event => {
        setName(event.target.value);
    };
    function handleData() {
        name && number ? setCount(3) : alert('please fill')
    }
    return (
        <div className="pricing">
            <div className="pricing_box">
                <p className='pricing_title'>Сколько стоят услуги</p>
                <div>
                    <p className='pricing_subtitle'>Цена рассчитывается индивидуально
                        в зависимости отсложности, объема
                        и сроков работы.
                    </p>
                    <p className='pricing_subtitle'>Разработчик оценивает временные затраты
                        по проекту, а аналитики устанавливают
                        стоимость продукта.</p>
                </div>
            </div>


            {count === 0 ? <div className="pricing_card">
                <div>
                    <p className='pricing_card_title'> Получить <br />
                        бесплатную <br />
                        консультацию
                    </p>
                    <p className='pricing_card_subtitle'>
                        В рамках консультации уточним  необходимую информацию
                        для анализа вашего проекта
                    </p>
                </div>
                <button onClick={() => setCount(1)}>
                    Получить
                </button>
            </div> : count === 1 ?
                <div className="pricing_card">
                    <div>
                        <input
                            className='pricing_input'
                            placeholder='ваше имя'
                            type="text"
                            onChange={handleName}
                            value={name}

                        />
                        <input
                            className='pricing_input'
                            placeholder='номер телефона'
                            type="number"
                            onChange={handleNum}
                            value={number}

                        />
                    </div>
                    <button onClick={handleData}>
                        Отправить
                    </button>
                </div> :
                <div className="pricing_card last">
                    <div>
                        <p className='pricing_last_text'>спасиба за вашу заяфку!</p>
                        <img src={success} alt="" />
                        <p className='pricing_last_text'>наш менеджер скоро свяжется с вами</p>
                    </div>
                    <button onClick={() => {
                        setCount(0);
                        setName('');
                        setNumber('')
                    }}
                        className='last_btn'>Отправлено</button>
                </div>}
        </div>
    )
}
