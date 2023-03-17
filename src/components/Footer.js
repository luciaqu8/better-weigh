import React from 'react'
import Logo from "../assets/better-weigh-logo.svg";
import Map from '../assets/map.svg'
import Phone from '../assets/telephone.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='container1-footer'>
            <div className='col1-footer'>
                <img src={Logo} alt='logo'></img>
                <p className='col1-p1'>A Better Weigh Medical Weight Loss Center offers a weight loss program dedicated to helping you achieve long term weight loss success with the use of FDA approved medication.</p>
                <div className='contact1'>
                    <img src={Map} alt='map' /><p><span>Head Office: </span>1931 W 95th Streeet Chicago IL, 60643</p>
                </div>
                <div className='contact2'>
                <img src={Phone} alt='telephone' /><p><span>Phone: </span>773-496-4222</p>
                </div>
            </div>

            <div className='col2-footer'>
                <div className='col1-footer-links'>
                    <h1>About</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Book Online</li>
                        <li>Locations</li>
                        <li>Real Patient Stories</li>
                        <li>Weight Loss Programs</li>
                    </ul>
                </div>
                <div className='col2-footer-links'>
                <h1>More Links</h1>
                    <ul>
                        <li>Franchise Opportunities</li>
                        <li>Career Opportunities</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='container2-footer'>
                <div className='social-links'>
                    <img src={Instagram} alt='instagram'></img>
                    <img src={Twitter} alt='twitter'></img>
                    <img src={Facebook} alt='facebook'></img>
                </div>

                <p>Copyright by A Better Weigh Inc. All rights reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer
