import React from 'react'

function Footer() {
  return (
    <div className='footer'> 
      <div className="container">
        <div className="social">
            <Link  className='nav__logo' to='/'> 
                <img src={logo} alt="" /> <h3>ANDIJAN HOUSE</h3> 
            </Link> 
        </div>
      </div>
    </div>
  )
}

export default Footer