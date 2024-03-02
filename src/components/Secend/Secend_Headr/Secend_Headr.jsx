import React from 'react'
import './Secend_Headr.scss'
import Header from '../../Header/Header'
import bottomimg from '../../../assets/Secend_imgs/btn__bottom_img.png'

function Secend_Headr() {
  return (
    <div className='Header'>
          <Header/>
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
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
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
                  <input className='house__size__inp1' type="number" placeholder='00,0'/>
                  <span className='input__line'></span>
                  <h6 className='house__size__h6' >до</h6>
                  <input className='house__size__inp1' type="number" placeholder='00,0'/>
                </div>
                <img className='btn__botom__img' src={bottomimg} alt="" />
              </div>
              <div className="btn"></div>
              <div class="dropdown">
                <h6>Выберите проект</h6>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Любой
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secend_Headr