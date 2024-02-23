import React from 'react' 
import { Link } from 'react-router-dom' 
import logo from '../../assets/logo/logo.svg' 
 
function Header() { 
  return ( 
    <div className='container'> 
        <nav> 
            <Link  className='nav__logo' to='/'> 
                <img src={logo} alt="" /> <h3>ANDIJAN HOUSE</h3> 
            </Link> 
            <ul className='nav__list'> 
                <li className="nav__item"> 
                    <Link to='/' className='nav__link'>Главная страница</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/' className='nav__link'>Дома</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/' className='nav__link'>Риелторы</Link> 
                </li> 
            </ul> 
            <option value="leng"> 
                <select>Ru</select> 
                <select>uz</select> 
            </option> 
        </nav> 
    </div> 
  ) 
} 
 
export default Header