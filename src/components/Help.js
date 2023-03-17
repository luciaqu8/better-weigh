import React from 'react'
import HelpImg from '../assets/helpimg.svg'
import HelpImg2 from '../assets/helpimg2.svg'

const Help = () => {
  return (
    <div className='container-help'>
        <div className='container-help-text'>
            <h1>We Can Help You</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo in odio placerat luctus quis vel orci. Nullam hendrerit auctor odio. Sed non est sit amet eros egestas mattis. Fusce sollicitudin odio quis sapien commodo, eget lacinia libero laoreet. Vivamus non mattis ex. Nam aliquet dui id rhoncus tristique. Quisque ullamcorper magna nec dolor fermentum, nec elementum risus lobortis. Quisque finibus leo in congue placerat.</p>
            <p>Maecenas nunc elit, tincidunt ut tempus ac, maximus sit amet lacus. Mauris hendrerit nisl at justo pellentesque, sit amet blandit nibh imperdiet. Pellentesque rhoncus justo in magna sodales, ac tempor dui consequat. Curabitur ipsum massa, maximus id orci at, facilisis lacinia nibh.</p>
            <button className='book-button-help'><span className='text-book-button-help'>Book my appointment</span></button>
        </div>
        <div className='container-help-img'>
            <img src={HelpImg} alt='Group' className='help-img1'/>
        </div>
        <div className='help-reactive'>
            <img src={HelpImg2} alt='Group2' className='help-img2'/>
            <div className='container-help-text-reactive'>
            <p>Proin cursus et elit non consequat. Aenean sodales, sem sed ultricies auctor, dolor eros suscipit nunc, sed malesuada ligula ipsum id eros. Pellentesque facilisis ipsum vitae lorem finibus, quis faucibus orci ultrices. Donec lectus diam, scelerisque et erat quis, rhoncus hendrerit tortor. Nam leo lorem, rutrum eu porttitor nec, tristique ut lacus. In pellentesque lectus interdum, facilisis massa sed, hendrerit justo. Ut sed nulla at tellus feugiat gravida quis eget metus. Praesent dui dui, viverra vitae libero sed, malesuada luctus orci. Cras nec vestibulum arcu, non tempus ipsum. Phasellus id placerat arcu, non tincidunt lorem. </p>
                <button className='book-button-cons'><span className='text-book-button-cons'>See patient stories</span></button>
             </div>
        </div>
        
    </div>
  )
}

export default Help