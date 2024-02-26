import React from 'react'
import './Riel.scss'
import img1 from '../../assets/back1.png'
import img2 from '../../assets/first.png'
// import img3 from '../../assets/second.png'
// import img4 from '../../assets/third.png'
// import img5 from '../../assets/back2.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

function Riel() {
  return (
    <>
  <div className="container">
    <div className="header">
       <img className='img1' src={img1} alt="" />
       <div className="middle">
        <h3>Найти хорошего риелтора непросто. Мы поможем!</h3>
        <br />
        <img className='img2' src={img2} alt="" />
        <br />
        <button className='butt'>Подобрать риелтора</button>
       </div>
       <div className="backround">
        <h3>Чем полезен риелтор</h3>
        <div className="cards">

        <div className="card">
          <img src={icon1} alt="" />
          <h4>Подберёт квартиру по вашим запросам</h4>
          <p>Риелтор видит неочевидные плюсы
          и минусы всех вариантов, а ещё <br />
          может обратить ваше внимание на<br />
          квартиры, которые вы по каким-то<br />
          причинам ранее не рассматривали.</p>
        </div>

        <div className="card">
          <img src={icon2} alt="" />
          <h4>Проверит квартиру и документы</h4>
          <p>До 7% сделок с недвижимостью <br />
          могут быть оспорены в дальнейшем. <br />
          Для покупателя это означает, что при <br />
          самом плохом сценарии он может <br />
          потерять и квартиру, и деньги. <br />
          Риелтор этого не допустит.</p>

        </div>
        <div className="card">
          <img src={icon3} alt="" />
          <h4>Организует и проведёт сделку</h4>
          <p>Риелтор поможет провести <br />
          просмотры, соберёт и проверит <br />
          документы, будет общаться со <br />
          второй стороной сделки и отстаивать <br />
          ваши интересы на каждом этапе.</p> 


        </div>
        </div>
        <div className="rieltorov">
          <h3>Подбираем проверенных риелторов</h3>
          <ul className='riel__list'>
            <li className="riel__item">
              
            </li>
          </ul>
        </div>
       </div>
       
    </div>
  </div>
    </>
  )
}

export default Riel
