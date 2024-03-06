import React from 'react'
import './Secend_Headr.scss'
import Header from '../../Header/Header'
import bottomimg from '../../../assets/Secend_imgs/btn__bottom_img.png'
import smalicon from '../../../assets/Secend_imgs/btn__smal__img.png'
import semalicon from '../../../assets/Secend_imgs/btn__smal__img_grey.png'
import btnbotimg from '../../../assets/Secend_imgs/btn__botom__img.png'
import rightximg from '../../../assets/Secend_imgs/h5__x__img.png'
import btnico from '../../../assets/Secend_imgs/btn__icon.png'

function Secend_Headr() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="Header__nav">
          <div className="Header__nav__btns">
            <h1 className='Header__nav__btns__h1'>Выберите дом</h1>
            <div className="Nav__btns">
              <div class="dropdown">
                <h6>Выберите проект</h6>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Любой
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">современный</a></li>
                  <li><a class="dropdown-item" href="#">простой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                </ul>
              </div><div class="dropdown">
                <h6>Выберите проект</h6>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Любой
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">современный</a></li>
                  <li><a class="dropdown-item" href="#">простой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                </ul>
              </div>
              <div className="Nav__btn1">
                <h6 className='btn__h6'>Укажите площадь дома, м²</h6>
                <div className="house__size__inp">
                  <h6 className='house__size__h6'>от</h6>
                  <input className='house__size__inp1' type="number" placeholder='00,0' />
                  <span className='input__line'></span>
                  <h6 className='house__size__h6' >до</h6>
                  <input className='house__size__inp1' type="number" placeholder='00,0' />
                </div>
                <img className='btn__botom__img' src={bottomimg} alt="" />
              </div>
              <div className="Nav__btns__and__lorm">
                <div className="Nav__btns__drop">
                  <div className="Nav__btns__drop1">
                    <h6 className='Nav__btns__drop1__h61'>По стоимости <img className='Nav__btns__drop1__h6_icon' src={smalicon} alt="" /></h6>
                    <h6 className='Nav__btns__drop1__h6'>По взносу <img className='Nav__btns__drop1__h6_icon' src={semalicon} alt="" /></h6>
                    <h6 className='Nav__btns__drop1__h6'>По платежу <img className='Nav__btns__drop1__h6_icon' src={semalicon} alt="" /></h6>
                  </div>
                  <div className="Nav__btns__drop2">
                    <div className="drop2__btns__inp">
                      <h6 className='drop2__h6'>от</h6>
                      <input className='drop2__inp' type="number" placeholder="0000" />
                      <h6 className='drop2__h61'>uzs</h6>
                      <span className='drop2__line'></span>
                      <h6 className='drop2__h62'>до</h6>
                      <input className='drop2__inp' type="number" placeholder="0000" />
                      <h6 className='drop2__h63'>uzs</h6>
                    </div>
                    <img className='Nav__btns__drop2__btm__img' src={btnbotimg} alt="" />
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <h6>Выберите проект</h6>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Любой
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">современный</a></li>
                  <li><a class="dropdown-item" href="#">простой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                </ul>
              </div>
            </div>
            <div className="Nav__thre__btns">
              <button className='thre__btn'> <img src={btnico} alt="" />Все фильтры</button>
              <h3 className='thre__h3'>Найдено 84 дома</h3>
              <h5 className='thre__h5'>Очистить фильтр <img src={rightximg} alt="" /></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secend_Headr