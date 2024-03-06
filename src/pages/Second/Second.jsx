import React from 'react'
import './Second.scss'
import Secend_Headr from '../../components/Secend/Secend_Headr/Secend_Headr'
import Secend_Mein from '../../components/Secend/Secend_Mein/Secend_Mein'
import Secend_Midle from '../../components/Secend/Secend_Midle/Secend_Midle'

function Second({lang}) {
  return (
    <div>
      <Secend_Headr lang={lang}/>
      <Secend_Mein/>
      <Secend_Midle/>
    </div>
  )
}

export default Second