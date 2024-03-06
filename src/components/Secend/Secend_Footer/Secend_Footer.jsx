import React from 'react'
import './Secend_Footer.scss'
import hauseimg from '../../../assets/Secend_imgs/Secend__footer__bg_haus.png'
import cartbgimg from '../../../assets/Secend_imgs/Secend__cart_img.png'

function Secend_Footer() {
    return (
        <div className='Secend_Footer'>
            <div className="container">
                <div className="Nav__img__cart">
                    <div className="Nav__bgimg">
                        <img className='Nav__bghause' src={hauseimg} alt="" />
                        <div className="Chekin__cart">
                            <img className='chelin__img' src={cartbgimg} alt="" />
                            <div className="Chekin__carts">
                                <div className="Chekin__into">
                                    <div className="Chekin__head">
                                        <h3 className='Chekin__head__h3'>Оставляйте заявку <br /> на консультацию</h3>
                                        <h5 className='Chekin__head__h5'>Заполните форму для консультации или позвоните в <br /> наш отдел продаж прямо сейчас:</h5>
                                        <h4 className='Chekin__head__h4'>+998991234567</h4>
                                    </div>
                                    <div className="Chekin__inputs">
                                        <div className="chekin__nubers">
                                            <div className="lorm__inp">
                                                <h3 className='lorm__inp__h3'>Имя</h3>
                                                <input className='lorm__inp__inp' type="text" placeholder='Напишите ваше имя' />
                                            </div>
                                            <div className="lorem__inp">
                                                <h3 className='lorem__inp__h3'>Номер</h3>
                                                <input className='lorem__inp__inp' type="number" placeholder='+998__ ___ __ __' />
                                            </div>
                                        </div>
                                        <div className="chekin__emilbtn">
                                            <div className="hinputs">
                                                <h3 className='hinputs__h3'>E-mail</h3>
                                                <input className='hinputs__inp' type="text" name="email" placeholder='Напишите ваше имя' />
                                            </div>
                                            <button className='chekin__emilbtn__btn'>Отправить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secend_Footer