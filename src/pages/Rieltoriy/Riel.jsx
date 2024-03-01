
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
import ava1 from '../../assets/riel_circle_img1.png'
import ava2 from '../../assets/riel_circle_img2.png'
import ava3 from '../../assets/riel_circle_img3.png'
import ava4 from '../../assets/riel_circle_img4.png'
import ava5 from '../../assets/riel_circle_img5.png'
import ava6 from '../../assets/riel_circle_img6.png'
import ava7 from '../../assets/riel_circle_img7.png'
import ava8 from '../../assets/riel_circle_img8.png'



import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Riel() {
  return (
    <div className="headeri riel__main">
         <div className="riel__wrapper">
         <span className='hero'>
          {/* <div className="container">
          </div> */}
            <Header />
            <img className='img1' src={img1} alt="" />
            <div className="riel__top__cont">
              <ul className='riel__top' >
                <li className='riel__top1'>
                  <h3>Выберите район</h3>
                  <select class="form-select " aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </li>
                <li className='riel__top2' >
                  <h3>Количество комнат</h3>
                  <span className='top2__span'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4+</button>
                  </span>
                </li>
                <li></li>
                <li></li>
                <li></li> 
              </ul>
              <span>
                <button></button>
                <button></button>
              </span>
            </div>
          </span>
          <div className="middle">
            <h3>Найти хорошего риелтора непросто. Мы поможем!</h3>
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
            <button className='butt'>Подобрать риелтора</button>
          </div>
          <div className="backround">
            <h3>Чем полезен риелтор</h3>
            <div className="riel__cards">

              <div className="riel__card">
                <img src={icon2} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>

              <div className="riel__card">
                <img src={icon1} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>

              <div className="riel__card">
                <img src={icon3} alt="" />
                <h4>Подберёт квартиру по вашим запросам</h4>
                <p>Риелтор видит неочевидные плюсы
                  и минусы всех вариантов, а ещё
                  может обратить ваше внимание на
                  квартиры, которые вы по каким-то
                  причинам ранее не рассматривали.</p>
              </div>
            </div>
            <h3>Подбираем проверенных риелторов</h3>
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
                <img src={ava8} alt="" />
              </li>
              <li className="list__item">
                <span>
                  <h4>James Hall</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>5,0</span> 137 отзывов  </p>
                </span>
                <img src={ava7} alt="" />
              </li>
            </ul>


            <ul className='second__list'>

            <li className="second__list__item">
                <span>
                  <h4>Мария Власова</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>4,8</span> 67 отзывов  </p>
                </span>
                <img src={ava6} alt="" />
              </li>

              <li className="second__list__item">
                <span>
                  <h4>Мария Власова</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>4,8</span> 67 отзывов  </p>
                </span>
                <img src={ava5} alt="" />
              </li>

              <li className="second__list__item">
                <span>
                  <h4>Мария Власова</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>4,8</span> 67 отзывов </p>
                </span>
                <img src={ava4} alt="" />
              </li>

              <li className="second__list__item">
                <span>
                  <h4>Мария Власова</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>4,8</span>67 отзывов  </p>
                </span>
                <img src={ava3} alt="" />
              </li>
              
              <li className="second__list__item">
                <span>
                  <h4>Мария Власова</h4>
                  <p><i className="bi bi-star-fill my__star"></i> <span  className='my__star'>4,8</span> 67 отзывов  </p>
                </span>
                <img src={ava2} alt="" />
              </li>
              
            </ul>


          </div>
          <h3>Как это работает</h3>

          <div className="bimges">


            <div className="bimg">
              <img src={im1} alt="" />
              <span>
                <h4>Заполните анкету</h4>
                <p>Это займёт пару минут, мы сможем узнать
                  все нюансы вашей ситуации, чтобы
                  подобрать для вас подходящих
                  риелторов.</p>
              </span>
            </div>

            <div className="bimg">
              <img src={im2} alt="" />
              <span>
                <h4>Поговорите с риелторами</h4>
                <p>С вами свяжется не более 3-х
                  специалистов, с которыми вы можете
                  обсудить условия работы.</p>
              </span>
            </div>

            <div className="bimg">
              <img src={im3} alt="" />
              <span>
                <h4>Выберите специалиста</h4>
                <p>Начните работать с понравившимся
                  риелтором или заполните заявку снова, и
                  мы постараемся подобрать кого-то ещё.</p>
              </span>
            </div>
          </div>
          <Footer/>
         </div>
        </div>

  )
}

export default Riel                    
