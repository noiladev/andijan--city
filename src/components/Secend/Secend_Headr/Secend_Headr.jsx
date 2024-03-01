import React from 'react'
import './Secend_Headr.scss'
import Header from '../../Header/Header'

function Secend_Headr() {
  return (
    <div className='Header'>
      <div className="container">
        <Header/>
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
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                  <li><a class="dropdown-item" href="#">Любой</a></li>
                </ul>
              </div>
              <div className="Nav__btn1">
                <h6>Укажите площадь дома, м²</h6>
                <div className="house__size__inp">
                  <h6>от</h6>
                  <input type="text" placeholder='00,0'/>
                  <img src="" alt="" />
                  <h6>до</h6>
                  <input type="text" placeholder='000,0'/>
                </div>
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