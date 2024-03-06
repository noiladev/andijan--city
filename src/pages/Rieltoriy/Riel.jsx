
import React from 'react'
import './Riel.scss'
import img1 from '../../assets/back1.png'
import img2 from '../../assets/first.png'
import img3 from '../../assets/second.png'
import img4 from '../../assets/third.png'
import img5 from '../../assets/back2.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import frame from '../../assets/Frame.png'
import im1 from '../../assets/1.png'
import im2 from '../../assets/2.png'
import im3 from '../../assets/3.png'
import ava1 from '../../assets/ava1.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { rielData } from '../../lib/Header/header'


function Riel({lang}) {
  const data = rielData[lang];
  console.log(data);
  return (
    <div className="headeri riel__main">
         <div className="riel__wrapper">
         <span className='hero'>
          {/* <div className="container">
          </div> */}
            <img className='img1' src={img1} alt="" />
          </span>
          <div className="middle">
            <h3>{data.nayti}</h3>
            <br />
            <div className="icons">
              <div className="icon">
                <img src={icon4} alt="" />
                <h4>Большая база риелторов</h4>
                <p>С Циан работают более 100 000
                  риелторов из разных регионов
                  России.</p>
              </div>

              <div className="icon">
                <img src={icon5} alt="" />
                <h4>Индивидуальный подбор</h4>
                <p>Учтём все детали от военной
                  ипотеки до материнского
                  капитала.</p>
              </div>

              <div className="icon">
                <img src={icon6} alt="" />
                <h4>Простая анкета</h4>
                <p>Уточним только самую
                  необходимую информацию.</p>
              </div>

              <div className="icon">
                <img src={icon7} alt="" />
                <h4>Бесплатный сервис</h4>
                <p>Подбор бесплатный. Условия
                  работы обсуждаются с риелтором
                  напрямую.</p>
              </div>

            </div>
            <br />
            <button className='butt'>{data.btn}</button>
          </div>
          <div className="backround">
            <h3>{data.polezen}</h3>
            <div className="cards">

              <div className="card">
                <img src={icon2} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>

              <div className="card">
                <img src={icon1} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>

              <div className="card">
                <img src={icon3} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>
            </div>
            <h3>{data.podribaem}</h3>
            <ul className='list'>
              <li className="list__item">
                <span>
                  <h4>Autumn Phillips</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>5,0</span> 137 отзывов  </p>
                </span>
                <img src={ava1} alt="" />
              </li>
              <li className="list__item">
                <span>
                  <h4>David Elson</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span className='my__star'>5,0</span> 137 отзывов  </p>
                </span>
                <img src={ava1} alt="" />
              </li>
              <li className="list__item">
                <span>
                  <h4>James Hall</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>5,0</span> 137 отзывов  </p>
                </span>
                <img src={ava1} alt="" />
              </li>
            </ul>
          </div>
          <h3>{data.rabotaet}</h3>

          <div className="bimges">


            <div className="bimg">
              <img src={im1} alt="" />
              <span>
                <h4>{data.card1_title}</h4>
                <p> {data.card1_des} </p>
              </span>
            </div>

            <div className="bimg">
              <img src={im2} alt="" />
              <span>
                <h4>{data.card2_title}</h4>
                <p>{data.card2_des}</p>
              </span>
            </div>

            <div className="bimg">
              <img src={im3} alt="" />
              <span>
                <h4>{data.card3_title}</h4>
                <p> {data.card3_des}</p>
              </span>
            </div>
          </div>
          <Footer/>
         </div>
        </div>

  )
}

export default Riel