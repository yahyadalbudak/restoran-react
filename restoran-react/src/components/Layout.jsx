import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/site-img/logo.png'
import tr from '../img/site-img/trbayrak.png'
import us from '../img/site-img/us.png'

const Layout = ({ children }) => {
  return (

    <div>
      <header className='header1 mb-5'>
        <div className='container gx-0'>
          <div className="nav-top d-flex justify-content-end pt-2 align-items-center me-3">
            <ul className='d-flex list-unstyled align-items-center'>
              <li><a className='pe-2' href="#"><img src={tr} alt="" /></a></li>
              <li><a className='' href="#"><img src={us} alt="" /></a></li>
            </ul>
          </div>
        <nav className="navbar navbar-expand-sm me-3">         
          <div className="container gx-0">
              <button className="navbar-toggler ms-auto bg-warning gx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center bg-info" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Anasayfa</Link>
                    <Link className="nav-link" to="/hakkimizda">Hakkımızda</Link>
                    <Link className="logo d-none d-sm-block" to=""><img src={logo} className="logo" alt="logo" /></Link>
                    <Link className="nav-link" to="/rezervasyon">Rezervasyon</Link>
                    <Link className="nav-link" to="/iletisim">İletişim</Link>
                </div>
              </div>
          </div>
          </nav>
        </div>
        
      </header>

      {/* Çocuk bileşenleri render etmek için children prop'unu kullanın */}
      <main>{children}</main>

      {/* <footer>
        Footer bileşeniniz buraya gelebilir
      </footer> */}
    </div>
  );
};

export default Layout;

