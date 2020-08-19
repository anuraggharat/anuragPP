import { Link } from "gatsby"
import React from "react"
import { FaHome, FaPenFancy, FaPhoneAlt, FaUserGraduate } from "react-icons/fa"
import { MdLaptopMac } from "react-icons/md"

const Header = () => (
  <header>
    <nav>
      <div>
        <h2 className="logo">
          <Link to="/">AG</Link>
        </h2>
      </div>
      <div className="navigation">
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
      <div className="navigation-icons">
        <Link className="nav-link" to="/">
          <FaHome className="navigation-icon" />
        </Link>
        <Link className="nav-link" to="/about">
          <FaUserGraduate className="navigation-icon" />
        </Link>
        <Link className="nav-link" to="/blogs">
          <FaPenFancy className="navigation-icon" />
        </Link>
        <Link className="nav-link" to="/work">
          <MdLaptopMac className="navigation-icon" />
        </Link>
        <Link className="nav-link" to="/contact">
          <FaPhoneAlt className="navigation-icon" />
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
