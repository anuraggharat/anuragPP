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
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/blogs">
          Blogs
        </Link>
        <Link className="nav-link" to="/work">
          Works
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
