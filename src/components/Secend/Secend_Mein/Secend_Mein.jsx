import React from 'react'
import './Secend_Mein.scss'
import btnleftico from '../../../assets/Secend_imgs/btn_icone.png'
import btnrightico from '../../../assets/Secend_imgs/btn__right__icone.png'
import btnleaft from '../../../assets/Secend_imgs/btn__leaft.png'
import btnright from '../../../assets/Secend_imgs/btn__right.png'

function Secend_Mein() {
  return (
    <div className='Secend__Mein'>
      <div className="container">
        <div className="Secend__Mein__Nav">
          <div className="Mein__Nav__btns">
            <div className="Mein__Nav__leaft__btn">
              <button className='Btn__dropdawn'><img className='Btn__dropdawn__left_img' src={btnleftico} alt="" /> Сначала дешевле <img className='Btn__dropdawn__right_img' src={btnrightico} alt="" /></button>
              <button className='Btn__leaft'>Без типов</button>  <button className='Btn__right'>По типам</button>
            </div>
            <div className="Mein__Nav__right__btn">
              <button className='Right__btn__rig'><img src={btnleaft} alt="" /></button> <button className='Right__btn__lef'><img src={btnright} alt="" /></button>
            </div>
          </div>
          <div className="Mein__Nav__carts"></div>
        </div>
      </div>
    </div>
  )
}

export default Secend_Mein
