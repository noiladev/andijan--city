import React from 'react' 
import { Link } from 'react-router-dom' 
import './Header.scss'
import logo from '../../assets/img/logos/Group.svg'
import { headerData } from '../../lib/Header/header';

function Header({ selectedLanguage, setSelectLanguage }) {
      let data = headerData[selectedLanguage];
      console.log(selectedLanguage);
  return ( 
    <header className='header'>
    <div className='container '> 
        <nav> 
            <Link  className='nav__logo' to='/'> 
                <img src={logo} alt="" /> 
                <h3 className='nav__titl'>ANDIJAN HOUSE</h3> 
            </Link>  
            <ul className='nav__list'> 
                <li className="nav__item"> 
                    <Link to='/' className='nav__link'>{data?.glavnaya}</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/second' className='nav__link'>{data?.title2}</Link> 
                </li> 
                <li className="nav__item"> 
                    <Link to='/third' className='nav__link'>{data?.title3}</Link> 
                </li> 
                <li className="nav__item"> 
                    <select onChange={(e)=> setSelectLanguage(e.target.value)}
                 class="form-select slelt_my" aria-label="Default select example">
                        <option selected hidden>Lang</option>
                        <option value="0" >Ru</option>
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