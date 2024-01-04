import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src=''/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src='logo crop.png' width={"80px"} height={"80px"} className='logo'/>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        
      <ul class="navbar-nav ">
        <Link to={"/"}>
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        </Link>
        <Link to={"/Search"}>
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
        </Link>
        <Link to={"/Offers"}>
        <li class="nav-item">
          <a class="nav-link" href="">Offers<span>*</span></a>
        </li>
        </Link>
        <Link to={"/Help"}>
        <li class="nav-item">
          <a class="nav-link" href="#">Help</a>
        </li>
        </Link>
        <Link to={"/SignIn"}>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-user-o px-2" aria-hidden="true"></i>Sign In</a>
        </li>
        </Link>
        <Link to={"/Cart"}>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Topbar