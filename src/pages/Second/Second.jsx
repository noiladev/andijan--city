import React from 'react'
import './Second.scss'
import Secend_Headr from '../../components/Secend/Secend_Headr/Secend_Headr'
import Secend_Mein from '../../components/Secend/Secend_Mein/Secend_Mein'
import Secend_Midle from '../../components/Secend/Secend_Midle/Secend_Midle'
import Secend_Footer from '../../components/Secend/Secend_Footer/Secend_Footer'

function Second() {
  return (
    <div className='Second'>
      <Secend_Headr/>
      <Secend_Mein/>
      <Secend_Midle/>
      <Secend_Footer/>
    </div>
  )
}

export default Second