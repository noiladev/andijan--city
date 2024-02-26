import React from 'react'
import './Third.scss'
import top from '../../assets/img/top.png'
import card__img from '../../assets/img/card.png'
import card__img2 from '../../assets/img/card2.png'
import card__img3 from '../../assets/img/card3.png'
import pagination from '../../assets/img/pagination.png'
import banner from '../../assets/img/Banner.png'
function Third() {
  return (
    <section className="Third">
      <div className="container">
        <img src={top} alt="" />
        <div className="main">
          <div className="pagin">
            <p className="main__p">Особенности комплекса</p>
              <img src={pagination} alt="" />
          </div>
            <div className="cards">
              <div className="card">
                <img src={card__img3} alt="" />
              </div>
              <div className="card">
                <img src={card__img2} alt="" />
              </div>
              <div className="card">
                <img src={card__img3} alt="" />
              </div>
              <div className="card">
                <img src={card__img} alt="" />
              </div>
            </div>
            <div className="pagin">
            <p className="main__p2">Места поблизости</p>
            <img className='img__pagin' src={pagination} alt="" />

            </div>
            <div className="cards">
              <div className="card">
                <img src={card__img2} alt="" />
              </div>              <div className="card">
                <img src={card__img} alt="" />
              </div>
              <div className="card">
                <img src={card__img3} alt="" />
              </div>
              <div className="card">
                <img src={card__img2} alt="" />
              </div>
              </div>
              </div>
      </div>
      <div className="bannner">
                <img className='banner' src={banner} alt="" />
              </div>
    </section>
  )
}

export default Third