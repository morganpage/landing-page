import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div>LOGO HERE</div>
        <ul>
          <div className="nav-links">
            <li>
              <Link className="link" to="/using-typescript/">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/using-typescript/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="link" to="/using-typescript/">
                FAQ
              </Link>
            </li>
          </div>
          <li>
            <a className="btn-grad" href="#about">
              GET STARTED
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
