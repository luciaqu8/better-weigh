import React from 'react'
import Arrow from '../assets/chevron-down.svg'

const Questions = () => {
  return (
    <div className='questions-container'>
        <div className='questions-text'>
            <h1 className='questions-heading'>Frequently Asked Questions</h1>
            <div className='questions'>
                <ul>
                    <div className='selector-questions'><li>Why is it free?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Do I need this if I’ve had my yearly medical check? What is the difference?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Can I bring another person to the appointment?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>How long does it take?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>What if I have to cancel or if I’m not sure I’ll be able to make it?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Do I need to bring anything with me?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>What if I don’t have insurance?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Do the weight loss programs you offer work?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>What's the catch?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Will I have to exhaust myself in the gym to make it work?</li><img src={Arrow} alt='arrow-down' /></div>
                    <div className='selector-questions'><li>Where are you located?</li><img src={Arrow} alt='arrow-down' /></div>
                </ul>
            </div>

            <button className='book-button-questions'><span className='text-book-button-questions'>Book my appointment</span></button>
        </div>
    </div>
  )
}

export default Questions