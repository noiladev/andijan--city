import React from 'react'
import './Third.scss'
import top from '../../assets/img/top.png'
import card__img from '../../assets/img/card.png'
import card__img2 from '../../assets/img/card2.png'
import card__img3 from '../../assets/img/card3.png'
import pagination from '../../assets/img/pagination.png'
import banner from '../../assets/img/Banner.png'
import building from '../../assets/img/building.png'
import Header from '../../components/Header/Header'
import form from '../../assets/img/form.png'
import { ThirdData } from '../../lib/third/third'

function Third({lang}) {
  const data = ThirdData[lang]
  console.log(data);
  return (
    <div className="third__special">
    <section className="Third">
      <div className="container">
        <img className='third__top' src={top} alt="" />
        <div className="third__main">
          <div className="third__pagin">
            <p className="third__main__p">{data.kompleks} </p>
            <img src={pagination} alt="" />
          </div>
          <div className="third__cards">
            <div className="third__card">
              <img src={card__img3} alt="" />
            </div>
            <div className="third__card">
              <img src={card__img2} alt="" />
            </div>
            <div className="third__card">
              <img src={card__img3} alt="" />
            </div>
            <div className="third__card">
              <img src={card__img} alt="" />
            </div>
          </div>
          <div className="third__pagin">
            <p className="third__main__p2"> {data.pobliznosti}</p>
            <img className='third__img__pagin' src={pagination} alt="" />

          </div>
          <div className="third__cards">
            <div className="third__card">
              <img src={card__img2} alt="" />
            </div>              <div className="card">
              <img src={card__img} alt="" />
            </div>
            <div className="third__card">
              <img src={card__img3} alt="" />
            </div>
            <div className="third__card">
              <img src={card__img2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="third__bannner">
        <img className='third__banner' src={banner} alt="" />
      </div>
      <div className="third__textd">
        <div className="third__text">
          <h3 className="third__t__h3">О жилом комплексе</h3>
          <p className='third__t__p'>
          {data.komplekse_description}
          <br />
            <br />
            {data.komplekse_description2} 
          </p>
        </div>
      </div>
      <div className="third__key">
        <img src={form} alt="" />
        <input className='third__input' type="text"  placeholder='Ваше имя'/>
        <input className='third__input2' type="text"  placeholder='Ваш email'/>
        <input className='third__input3' type="text"  placeholder='+998__ ___ __ __'/>
        <button className='third__btn'> {data.otpavit}</button>
        </div>
    </section>
    </div>
  )
}

export default Third