import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navbar() {

  return <>
  <nav className="navbar shadow navbar-expand-md bg-white navbar-light  fixed-top">
  <div className="container-fluid  ms-xl-5 ps-xl-5 m-0">
    <Link className="navbar-brand" to={'/'}>
      <img src={logo} className='w-25' alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-4 ms-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown fs-5">
          <a className="nav-link dropdown-toggle main-nav-items text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item fs-5 text-black" >Resturant</Link></li>
            <li><Link className="dropdown-item fs-5 text-black" href="#">Hotels</Link></li>
            <li><Link className="dropdown-item fs-5 text-black" href="#">Places</Link></li>
          </ul>
        </li>
        <li className="nav-item ms-2">
          <Link to={'/About'} className="nav-link fs-5 text-black main-nav-items" href="#">About US</Link>
        </li>
        <li className="nav-item ms-2">
          <Link to={'/Contact'} className="nav-link fs-5 text-black main-nav-items" href="#">Contact Us</Link>
        </li>

      </ul>
      <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
        <button className="btn yellow" type="submit">Tour Programe</button>
        </li>
        <li className="nav-item me-5 circle">
        <Link to={'/login'} className='text-black'><i className="fa-regular fa-user fa-xl"></i></Link>
        </li>

      </ul>
         </div>
  </div>
  </nav>
  </>
}
