import React from 'react'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg position-sticky navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-inline" href="#">Vishwajit Nagtilak</a>
        <a className="navbar-brand d-md-none d-inline" href="#">V N</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto "> 
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#about">About </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#work">Work </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
}
