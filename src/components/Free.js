import React from 'react'

const Free = () => {
  return (
    <div className='container-free'>
        <div className='container-free-text'>
            <h1 className='free-heading'>What You'll Get At Your <span className='free-span'>Free</span> Consultation</h1>
            <div className='container-free-boxes'>
                <div className='free-box1'>
                    <div className='free-box-square'>
                    <h1>Body Mass Index</h1>
                        <div className='freebox-text'>
                            <div className='free-line1'></div>
                            <ul>
                                <li>Complete understanding of your body composition.</li>
                                <li>A clar view of your weigh loss goals</li>
                                <li>Clear data to help you make an informed decision about your health.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='free-box2'>
                    <div className='free-box-square'>
                        <h1>Vital Signs Check</h1>
                        <div className='freebox-text'>
                            <div className='free-line2'></div>
                            <ul>
                                <li>Body temperature</li>
                                <li>Pulse rate, heart's rate, rhythm and regularity</li>
                                <li>Breathing rate</li>
                                <li>Blood pressure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className='book-button-free'><span className='text-book-button-free'>Book my appointment</span></button>
        </div>
    </div>
  )
}

export default Free