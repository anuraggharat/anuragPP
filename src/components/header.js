import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav>
      <div>
        <h2>AnuragGharat</h2>
      </div>
      <div>
        <Link  className="nav-link">About</Link>
        <Link  className="nav-link">Blogs</Link>
        <Link  className="nav-link">Works</Link>
        <Link  className="nav-link">Contact</Link>
      </div>
    </nav>
  </header>
)


export default Header
