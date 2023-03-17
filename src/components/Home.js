import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <>
    {/* NavBar */}
    <header>
      <div className='nav-bar'>
        <NavBar /> 
      </div>
    </header>

    <div className='home-template'>
      <div className='elipse-2'></div>
      <div className='elipse-1'></div>
      <div className='elipse-1-reactive'></div>
      <div className='yellow-container'></div>

      <div className='home-container'>

        {/* Home Container */}
          <div className='row-home-banner-container'>

            {/* Home text */}
            <div className='col-1-home-text'>
                <h1 className='home-heading'>Chicago's <span className='free'>Free</span> Medical Check-Up and Weight Loss Consultation</h1>

                {/* Only mobile and tablets */}
                <h6 className='homemobile-h6'>Only<span className='homemobile-span'> 11 </span>spots available!</h6>
                
                <p className='home-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam metus, malesuada ac magna iaculis, dictum tristique libero. Praesent euismod dui at dui rutrum venenatis. </p>
                <button className='book-button'><span className='text-book-button'>Book my appointment</span></button>
            </div>

            {/* Home counter */}
            <div className='col-2-counter'>
                <div className='counter-rectangle'>
                  <div className='counter-text'>
                    <p className='counter-1text'>Your offer ends in:</p>
                    <div className='counter-2text'>
                      <ul>
                        <li>DAYS</li>
                        <li>HOURS</li>
                        <li>MINUTES</li>
                        <li>SECONDS</li>
                      </ul>
                    </div>

                    <div className='counter-numbers'>
                      <ul>
                        <li>00</li>
                        <li>16</li>
                        <li>29</li>
                        <li>27</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>

            {/* Only mobile and tablets */}
            <div className='home-text-mobile'>
              <p>Vestibulum in nunc mattis, porta mauris eu, tincidunt lorem. Curabitur porta, massa quis scelerisque eleifend, dui sapien feugiat ligula, eget ornare nibh massa molestie nunc.</p>
            </div>
            <div className='home-button-mobile'>
              <button className='button-mobile'><span className='text-button-mobile'>Book my appointment</span></button>
            </div>
          </div> 
      </div>
  </div>
  </>
  )
}

export default Home