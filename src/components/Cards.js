import React from 'react'
import BriefCase from '../assets/briefcase.svg'
import Smile from '../assets/smile.svg'
import Chat from '../assets/chat.svg'
import Activity from '../assets/activity.svg'

const Cards = () => {
  return (
        <div className='cards-page'>
            <div className='cards-elipses'>
                <div className='card-elipse1'></div>
                <div className='card-elipse2'></div>
            </div>  
            <div className='cards-container'>
                <div className='card1'>
                    <img src={BriefCase} alt="briefcase" className='card1-img'/>
                    <h1>10 <span className='card-span'>+</span></h1>
                    <p>years in business</p>
                </div>
                <div className='card2'>
                    <img src={Smile} alt="Smile" className='card2-img'/>
                    <h1>2000 <span className='card-span'>+</span></h1>
                    <p>positive reviews</p>
                </div>
                <div className='card3'>
                    <img src={Chat} alt="Chat" className='card3-img'/>
                    <h1>15.000 <span className='card-span'>+</span></h1>
                    <p>statisfied clients</p>
                </div>
                <div className='card4'>
                    <img src={Activity} alt="Activity" className='card4-img'/>
                    <h1>Many <span className='card-span'>+</span></h1>
                    <p>nurses and physician assistants on staff</p>
                </div>
            </div>
            <button className='book-button-cards'><span className='text-book-button-cards'>Book my appointment</span></button>
        </div>
  )
}

export default Cards