import React from 'react'
import './Secend_Headr.scss'
import Header from '../../Header/Header'

function Secend_Headr() {
  return (
    <div className='Header'>
      <Header/>
      <div className="container">
        <h1 className='Header__h1'>Выберите дом</h1>
        <div className="Header__sorch"></div>
      </div>
    </div>
  )
}

export default Secend_Headr
