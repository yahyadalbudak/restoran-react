import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import videoBg from '../assets/bgvideo.mp4';
import logo2 from '../img/site-img/logo.png';

const Menu = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      $("#circle1").fadeIn();
      $("#circle2").fadeIn("slow");
      $("#circle3").fadeIn(2000);
      $("#circle4").fadeIn("slow");
      $("#circle5").fadeIn(2000);
      $("#circle6").fadeIn(3000);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="row">
        <video autoPlay loop className='w-100 p-0'>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="table2 mt-sm-5 col-md-12 col-sm-6 pt-sm-5">
          <div className="table1 d-flex align-items-center">
            <img src={logo2} className="img-fluid w-100 h-100" alt="logo" />
            <div className="circle mt-5 d-flex flex-column">             
              <Link className="circle-child text-end" id="circle2" to='/anaYemek'><h6>Ana Yemek</h6></Link>
              <Link className="circle-child text-end" id="circle1" to='/burger'><h6>Burger</h6></Link>
              <Link className="circle-child text-end" id="circle3" to='/çorba'><h6>Çorba</h6></Link>
              <Link className="circle-child text-start" id="circle4" to='/salata'><h6>Salata</h6></Link>
              <Link className="circle-child text-start" id="circle5" to='/içecek'><h6>İçecek</h6></Link>
              <Link className="circle-child text-start" id="circle6" to='/tatli'><h6>Tatlı</h6></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
