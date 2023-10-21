import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

const Menu = () => {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/">
          HO
        </NavLink>

        <NavLink to="/loja">
          ST
        </NavLink>

        <NavLink to="/mais">
          AD
        </NavLink>

        <NavLink to="/mapa">
          MA
        </NavLink>

        <NavLink to="/minha-conta">
          PR
        </NavLink>
      </nav>
    </header>
  )
}

export default Menu