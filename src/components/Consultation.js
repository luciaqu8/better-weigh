import React from 'react'
import ConsultationImage from "../assets/consultation-image.svg"

const Consultation = () => {
  return (
    <>
        <div className='consultation'>
            <div className='consultation-container'>
                <div className='col1-consultation'>
                    <div className='col1-consultation-text'>
                        <h1>Who Is The Consultation For?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam metus, malesuada ac magna iaculis, dictum tristique libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <div className='col2-consultation-text'>
                        <h1>How Does It Work?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam metus, malesuada ac magna iaculis, dictum tristique libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                    <button className='book-button-cons'><span className='text-book-button-cons'>Book my appointment</span></button>
                </div>

                <div className='col2-consultation'>
                    <img src={ConsultationImage} alt="Consultation"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Consultation