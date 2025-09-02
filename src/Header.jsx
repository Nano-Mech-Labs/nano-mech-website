import './Header.css'
import nano from './assets/logo.png'
function Header() {

  return (
    <>
      <header>
        <div className='company_name'>
          <img src={nano} alt="logo" className='logo'/>
          <h2 className='name'>Nano Mech Labs</h2>
        </div>
        <div className='nav'>
         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Resources</li>
          <li>Contact Us</li>
         </ul>
        </div>
      </header>
    </>
  )
}

export default Header
