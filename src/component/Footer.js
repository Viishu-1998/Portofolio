import React from 'react';
import {FaFacebook,FaInstagram,FaLinkedinIn,FaGithub,FaTwitter} from 'react-icons/fa'; 

export default function Footer() {
  return (
  <div className='footer pt-5'>
    <div className='container'>
    <div className='text-center'>
      <h2 className='pb-4'>Vishwajit Nagtilak</h2>
   </div>
   <div className='d-flex justify-content-between'>
     <div className=''>
     <p>Copyright ©2022 All rights reserved | vishwajit Nagtilak</p>
     </div>
     
     <div className='social-icons d-flex flex-column align-item-center'>
       <p className='m-0 pb-2'>Stay Connected:</p>
       <ul className='d-flex p-0'>
         <li className='icon '><a className='fb' href=''><FaFacebook/></a></li> 
         <li className='icon  ml-3'><a className='insta' href=''><FaInstagram/></a></li>
         <li className='icon  ml-3'><a className='in' href=''><FaLinkedinIn/></a></li>
         <li className='icon  ml-3'><a className='git' href=''><FaGithub/></a></li>
         <li className='icon  ml-3'><a className='twt' href=''><FaTwitter/></a></li>
       </ul>
     </div>
   </div>
    </div>

  </div>
  );
}






// import React from 'react';

// const Footer  = (props) => {
//     const firstName = 'john';
//     const lastName = 'wick';
//     const age = '23';
//     const job = 'manager';
//   return (
//   <div className='hh d-flex flex-column justify-content-center'>
//      <h3>Full Name : {firstName+''+lastName}</h3>
//      <p>Age : {age}</p>
//      <p>job : {job}</p>
//   </div>
//   );
// }
// export default Footer;