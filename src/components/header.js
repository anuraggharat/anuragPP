import { Link } from "gatsby"
import React from "react"
import { FaHome, FaPenFancy, FaPhoneAlt, FaUserGraduate } from "react-icons/fa"
import { MdLaptopMac } from "react-icons/md"

const Header = () => (
  <header>
    <nav>
      <div>
        <h2 className="logo">
          <Link to="/">AnuragGharat</Link>
        </h2>
      </div>
      <div className="navigation">
        <Link className="nav-link" to="/about" activeClassName="nav-active">
          About
        </Link>
        <Link className="nav-link" to="/blogs" activeClassName="nav-active">
          Blogs
        </Link>
        <Link className="nav-link" to="/work" activeClassName="nav-active">
          Works
        </Link>
        <Link className="nav-link" to="/contact" activeClassName="nav-active">
          Contact
        </Link>
      </div>
      <div className="navigation-icons">
        <Link className="nav-link" to="/" activeClassName="nav-link-active">
          <FaHome className="navigation-icon" />
        </Link>
        <Link
          className="nav-link"
          to="/about"
          activeClassName="nav-link-active"
        >
          <FaUserGraduate className="navigation-icon" />
        </Link>
        <Link
          className="nav-link"
          to="/blogs"
          activeClassName="nav-link-active"
        >
          <FaPenFancy className="navigation-icon" />
        </Link>
        <Link className="nav-link" to="/work" activeClassName="nav-link-active">
          <MdLaptopMac className="navigation-icon" />
        </Link>
        <Link
          className="nav-link"
          to="/contact"
          activeClassName="nav-link-active"
        >
          <FaPhoneAlt className="navigation-icon" />
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
