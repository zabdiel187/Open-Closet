import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-container">

      <div className="nav-logo-container">
        <h3>L o g o</h3>
      </div>

      <ul className="nav-links-container">
        <li>
          Collections
        </li>
        <li>
          Men
        </li>
        <li>
          Women
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar