import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logos/Group.svg'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'> 
      <div className="container footer__wrapper">
        <div className="social">
            <Link  className='nav__logo' to='/'> 
                <img src={logo} alt="" /> <h3>ANDIJAN HOUSE</h3> 
            </Link> 
            <ul className="net">
              <li className="apps"><i class="bi bi-telegram"></i></li>
              <li className="apps"><i class="bi bi-instagram"></i></li>
              <li className="apps"><i class="bi bi-youtube"></i></li>
              <li className="apps"><i class="bi bi-facebook"></i></li>
            </ul>
        </div>
        <ul className="list">
          <li className="item">
            <h3>Меню</h3>
            <p>Преимущества комплекса</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
          </li>
          <li className="item">
            <h3>Меню</h3>
            <p>Преимущества комплекса</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
          </li>
          <li className="item">
            <h3>Меню</h3>
            <p>Преимущества комплекса</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
            <p>Варианты оплаты</p>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Footer