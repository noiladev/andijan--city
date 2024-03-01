import React from 'react'
import './Secend_Mein.scss'
import btico from '../../../assets/Secend_imgs/btn_icone.png'
import { home } from '../../../lib/Second__data/Second__data'
import heart from '../../../assets/img/card3.png'

function Secend_Mein() {
  return (
    <div className='Mein'>
      <div className="container">
        <div className="Mein__sartirov">
          <div className="dropdawn__btn">
            <div class="dropdown">
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <img src={btico} alt="" />Сначала дешевле </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> <img src={btico} alt="" />Сначала дешевле </a></li>
                <li><a class="dropdown-item" href="#"> <img src={btico} alt="" />Сначала дешевле </a></li>
                <li><a class="dropdown-item" href="#"> <img src={btico} alt="" />Сначала дешевле </a></li>
              </ul>
            </div>
          </div>
          <div className="dabl__btn"></div>
          <div className="twe__btns"></div>
        </div>
        <div className="Main__carts">
          <div className="cards">
            {home.map((i) => (
              <div className="card1">
                <img className="img1" src={i.img} alt="" />
                <div className="high">
                  <button className="komfort">Комфорт</button>
                  <button className="komfort">Строится</button>
                  <button className="heart">
                    <img src={heart} alt="" />
                  </button>
                </div>
                <div className="low">
                  <p className="som">{i.title3}</p>
                  <button className="btn5">
                    “Business House”{" "}
                    <box-icon
                      color="white"
                      name="right-arrow-alt"
                    ></box-icon>
                  </button>
                </div>
                <div className="divs">
                  <div className="div1"></div>
                  <div className="div2"></div>
                  <div className="div2"></div>
                </div>
                <p className="andijon1">2- Andijon</p>
                <p className="komolon">Andijon.sh komolon .k </p>
                <div className="div_2">
                  <p className="div6">
                    <span className="span1">-</span> Cрок сдачи: 2024
                  </p>
                  <p className="div6">
                    <span className="span1">-</span>Рассрочка 29 месяц
                  </p>
                </div>
                <div className="div_3">
                  <p className="div6">
                    <span className="span1">-</span>Коробка
                  </p>
                  <p className="div6">
                    {""}
                    <span className="span1">-</span>Этажи 16
                  </p>
                </div>
                <p className="dogovor">Договорная</p>
                <button className="Подробнее">Подробнее</button>
              </div>
            ))}
          </div>
        </div>
        <div className="Mein__btn">
          <button className='Mein__btn_litle'>Посмотреть все</button>
        </div>
      </div>
    </div>
  )
}

export default Secend_Mein
