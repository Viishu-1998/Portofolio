import React from 'react'
import hero from '../hero.png'

export default function Header() {
    return (
      <div className="home-section">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center ">
            <strong>Welcome</strong>
            <h2>
              <span>I am</span> <span>Frontend-Developer</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
              Quibusdam id possimus itaque officiis eius, eligendi libero hic maxime! Atque neque<br/>
              cupiditate pariatur</p>
          </div>
          <div className="d-none d-md-inline">
            <img className="img-fluid" src={hero}  alt=""/>
          </div>
        </div>
      </div>
    </div> 
)
}