import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav() {
  const [burgerVisible, setBurgerVisible] = useState(false)
  const { logout, loginWithRedirect, user } = useAuth0()

  const toggleBurger = () => {
    setBurgerVisible((currentBurgerState) => !currentBurgerState)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <IfAuthenticated>
          <p className="subtitle is-primary">Welcome {user?.nickname}!</p>
        </IfAuthenticated>
        <div className="navbar-brand">
          <button
            onClick={toggleBurger}
            className={`navbar-burger burger ${
              burgerVisible ? 'is-active' : ''
            }`}
            data-target="navbarMenuHeroA"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          id="navbarMenuHeroA"
          className={`navbar-menu ${burgerVisible ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <IfAuthenticated>
              <Link className="button is-primary is-normal" to="/meeting">
                Start meeting
              </Link>

              <Link className="button is-primary is-normal" to="/history">
                Meeting history
              </Link>
              <Link className="button is-primary is-normal" to="/salary">
                Salary
              </Link>
              <button
                className="button is-primary is-normal"
                onClick={() => logout()}
              >
                Logout
              </button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              {/* THESE ARE AVAILABLE DURING DEVELOPMENT */}
              <Link className="button is-primary is-normal" to="/meeting">
                Start meeting
              </Link>

              <Link className="button is-primary is-normal" to="/history">
                Meeting history
              </Link>
              <Link className="button is-primary is-normal" to="/salary">
                Salary
              </Link>
              {/* THESE ARE AVAILABLE DURING DEVELOPMENT */}

              <button
                className="button is-primary is-normal"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </IfNotAuthenticated>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
