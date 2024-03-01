import React from 'react' 
import { Link } from 'react-router-dom' 
import './Header.scss'
import logo from '../../assets/img/logos/Group.svg'
// import { MainRu } from '../../lib/Main/MainRu'
// import { MainUz } from '../../lib/Main/MainUz'


function Header() { 
    // MainRu
    // MainUz
  return ( 
    <header className='header'>
    <div className='container '> 
    {/* {
         5 == 5 ? MainRu.map((item)=>{
            <p>{item.btn}</p>
        }) : 
        MainUz.map((item)=>{
            <p>{item.btn}</p>
        })
    } */}
        <nav> 
            <Link  className='nav__logo' to='/'> 
                <img src={logo} alt="" /> 
                <h3 className='nav__title'>ANDIJAN HOUSE</h3> 
            </Link> 
            <ul className='nav__list'> 
                <li className="nav__item"> 
                    <Link to='/' className='nav__link'>Главная страница</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/second' className='nav__link'>Дома</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/third' className='nav__link'>Риелторы</Link> 
                </li> 
                <li className="nav__item"> 
                    <select class="form-select slelt_my" aria-label="Default select example">
                        <option selected>Ru</option>
                        <option value="1">Uz</option>
                    </select>
                </li>
                <li className="nav__item uzs"> 
                <Link to='/rieltoriy' className='nav__link'>UZS</Link>
                </li>
            </ul> 
            
        </nav> 
    </div> 
    </header>
  ) 
} 
 
export default Header