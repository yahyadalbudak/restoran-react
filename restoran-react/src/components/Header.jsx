import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/site-img/logo.png'
import tr from '../img/trbayrak.png'
import us from '../img/us.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
        <div className="nav-top d-flex justify-content-end pt-2 align-items-center">
          <ul className='d-flex list-unstyled align-items-center'>
            <li><a className='pe-2' href=""><img src={tr} alt="" /></a></li>
            <li><a className='' href=""><img src={us} alt="" /></a></li>
          </ul>
        </div>
        <nav className="navbar navbar-expand-sm g-0">         
          <div className="container">
              <button className="navbar-toggler ms-auto" type="button" tabindex-1 data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <Link className="nav-link" to="/">Anasayfa</Link>
                  <Link className="nav-link" to="/hakkimizda">Hakkımızda</Link>
                  <Link className="" to="/"><img src={logo} className="logo" alt="logo" /></Link>
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

export default Header;

