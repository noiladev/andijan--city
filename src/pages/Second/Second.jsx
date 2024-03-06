import React from 'react'
import './Second.scss'
import Secend_Headr from '../../components/Secend/Secend_Headr/Secend_Headr'
import Secend_Mein from '../../components/Secend/Secend_Mein/Secend_Mein'
import Secend_Midle from '../../components/Secend/Secend_Midle/Secend_Midle'
import Secend_Footer from '../../components/Secend/Secend_Footer/Secend_Footer'

function Second({lang}) {
  return (
<<<<<<< HEAD
    <div>
      <Secend_Headr lang={lang}/>
=======
    <div className='Second'>
      <Secend_Headr/>
>>>>>>> 2914a21d0e62fb70511f7efc5705aed7e12bd1a1
      <Secend_Mein/>
      <Secend_Midle/>
      <Secend_Footer/>
    </div>
  )
}

export default Second