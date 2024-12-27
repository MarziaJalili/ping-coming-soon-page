import { useState } from "react"

function Navbar() {

  return (
    <nav className="ping-container__navbar">
      <ul className="ping-container__navigation-gird">
        <li>
          <a href="#" aria-label="Visit Example Website">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a href="#" aria-label="Visit Example Website">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a href="#" aria-label="Visit Example Website">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;