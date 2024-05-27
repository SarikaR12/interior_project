import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><img src="https://umea.qodeinteractive.com/wp-content/uploads/2021/04/umea-logo-light.png" alt="" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={"/"} class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to={"/About"} class="nav-link" href="#">About</Link>
            </li>
            <li class="nav-item">
              <Link to={"/Shop"} class="nav-link disabled" href="#">Shop</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Blog</a>
            </li>
          </ul>
          <form class="d-flex"><i class="fa-solid fa-magnifying-glass"></i>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
