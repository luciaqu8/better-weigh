import {useState} from 'react'
import Logo from "../assets/better-weigh-logo.svg";
import Menu from "../assets/menu-mobile.svg"
import Close from "../assets/cross.png"

const NavBar = () => {

  /* State for opening/closing mobile menu */
  const [open, setOpen] = useState(false)

  return (
    <>
    <nav>
        {/* Better Weigh logo */}
      <div className='nav-logo'>
        <img src={Logo} alt="logo" className='logo-img'/>
      </div>

      {/* Menu links */}
      <div className='nav-links-container'>
        <a href="./Home.js">About us</a>
        <a href="./Home.js">Book Online</a>
        <a href="./Home.js">Weight Loss Programs</a>
        <a href="./Home.js">Real Patient Stories</a>
        <a href="./Home.js">Locations</a>
        <a href="./Home.js">Blog</a>
        <a href="./Home.js">Shop</a>
        <a href="./Home.js">Subscription</a>
      </div>

      <div className={`menu-img ${open && "open"}`} onClick={ () => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    
      {/* Mobile Menu */}
      <div className={`nav-menu-container ${open && "open"}`}>
        <div className='navbar_mobile'>
          <a href="./Home.js">About us</a>
          <a href="./Home.js">Book Online</a>
          <a href="./Home.js">Weight Loss Programs</a>
          <a href="./Home.js">Real Patient Stories</a>
          <a href="./Home.js">Locations</a>
          <a href="./Home.js">Blog</a>
          <a href="./Home.js">Shop</a>
          <a href="./Home.js">Subscription</a>
        </div>
      </div> 
    </>
  )
}
export default NavBar