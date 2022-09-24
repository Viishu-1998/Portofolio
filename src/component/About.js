import React from 'react';
import about from '../about.png';

export default function About() {
  return (
    <div className="about-section">
    <h1 className="text-center bg-success" id="about">ABOUT ME</h1>
    <div className="container">
      <div className="row about-content">
        <div className="col-md-4  d-flex justify-content-center align-items-center">
          <img className="img-fluid about-img rounded-circle" src={about} alt=""/>
        </div>
        <div className="col-md-8  d-block justify-content-center align-items-center">
          <h2 className="py-4 text-center">Hello I am Vishwajit Nagtilak</h2>
          <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id facilis accusamus
            qui, quam earum sequi praesentium quas nam dolore beatae dolores, sint quisquam, ducimus saepe tempore
            animi distinctio ipsam.</p>
          <div className="row my-details">
            <div className="col-12">
              <div className="">
                <span>Name </span>: Vishwajit Nagtilak
              </div>
            </div>
            <div className="col-md-12">
              <div className="">
                <span>Age </span>: 23
              </div>
            </div>
            <div className="col-md-12">
              <div className="">
                <span>Address </span>: Vishwajit Nagtilak
              </div>
            </div>
            <div className="col-md-12">
              <div className="">
                <span>Email </span>: vishwajitnagtilak@gmail.com
              </div>
            </div>
            <div className="col-md-12">
              <div className="">
                <span>Phone number </span>: 9924596846
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5 text-md-left text-center">
            <button type="submit" value="Send message" name="submit" id="submitButton"
              className="btn btn-outline-danger" title="Submit Your Message!">Download Resume</button>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}
