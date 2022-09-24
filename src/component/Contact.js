import React from 'react';

export default function Contact() {
  return (
    <div className="contact-section">
    <h1 className="text-center bg-danger" id="contact">CONTACT</h1>
    <div className="container">
      <form className="form py-5">
        <div className="row">
          <div className="form-group col-md-4">
            <input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
          </div>
          <div className="form-group col-md-4">
            <input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
          </div>
          <div className="form-group col-md-4">
            <input type="text" name="subject" className="form-control" placeholder="Subject" required="required"/>
          </div>
          <div className="form-group col-md-12">
            <textarea rows="6" name="message" className="form-control" placeholder="Your Message"
              required="required"></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" value="Send message" name="submit" id="submitButton"
              className="btn btn-outline-success" title="Submit Your Message!">Send Message</button>
          </div>
        </div>
      </form>

      <div className="footer">

      </div>
    </div>


  </div>
  );
}
