import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import menü1 from '../img/menüler-img/ana-yemekler/çökertme-kebabı.jpg';
import menü2 from '../img/menüler-img/ana-yemekler/Izgara-kekikli-Antrikot.jpg';
import menü3 from '../img/menüler-img/ana-yemekler/bonfile-kavurma.jpg';
import menü4 from '../img/menüler-img/ana-yemekler/fajita-et.jpg';
import menü5 from '../img/menüler-img/ana-yemekler/satay-soslu-piliç-şiş.jpg';
import menü6 from '../img/menüler-img/ana-yemekler/yoğurtlu-akdeniz-kebabı.jpg';
import anayemekbg from '../img/menüler-img/ana-yemekler/anayemekk.png';

const Anayemek = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.anime-left',{
      origin:'left',
      duration:1300,
      distance:'25rem',
      delay:1200,
      
    });
    
    sr.reveal('.anime-right',{
      origin:'right',
      duration:1300,
      distance:'25rem',
      delay:2400,
    });

    sr.reveal('.anime-bottom',{
      origin:'bottom',
      duration:1000,
      distance:'25rem',
      delay:600,
    });

      ScrollReveal().reveal('.ani1',{delay:250});
      ScrollReveal().reveal('.ani2',{delay:500});
      ScrollReveal().reveal('.ani3',{delay:1000});
      ScrollReveal().reveal('.ani4',{delay:1500});
      ScrollReveal().reveal('.ani5',{delay:2000});
      ScrollReveal().reveal('.ani6',{delay:2500});
  }, []);

  
  return (
    <div className="container-fluid top-0 menuler">      
      <div className="container mt-5 pt-5">        
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center my-5 pb-5">
            <div className="d-flex text-center">             
              <Link className="fst-italic linkk" id="circle2" to='/anaYemek'><h6>Ana Yemek</h6></Link>
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle1" to='/burger'><h6>Burger</h6></Link>
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle3" to='/çorba'><h6>Çorba</h6></Link>
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle4" to='/salata'><h6>Salata</h6></Link>
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle5" to='/içecek'><h6>İçecek</h6></Link>
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle6" to='/tatli'><h6>Tatlı</h6></Link>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-left mb-3">
            <a href="">
              <div class="card mb-3 anime-left ani1" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-9">
                    <div class="card-body">
                      <h5 class="card-title">ÇÖKERTME KEBABI</h5>
                      <p class="card-text"><small class="">Sotelenmiş jülyen bonfile dilimleri, tereyağlı bazlama, patlıcan söğürme, kibrit patates, ızgara domates ve biber ile..</small></p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 card-left">
                    <img src={menü1} class="img-fluid" alt="..."/>
                  </div>
                </div>
              </div>
            </a>
          
            <a href="">
              <div class="card mb-3 anime-left ani3" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0 ">
                  <div class="col-12 col-lg-9">
                    <div class="card-body">
                      <h5 class="card-title">KEKİKLİ DANA ANTRİKOT</h5>
                      <p class="card-text"><small class="">Taze kekikle marine edilmiş dana antrikot, arpacık soğan, kırmızı ve yeşil biberle sote ile..</small></p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 card-left">
                    <img src={menü2} class="img-fluid" alt="..."/>                  
                  </div>
                </div>
              </div>
            </a>  

            <a href="">
              <div class="card mb-3 anime-left ani5" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-9">
                    <div class="card-body">
                      <h5 class="card-title">BONFİLE KAVURMA</h5>
                      <p class="card-text"><small class="">Sote bonfile dilimleri, mantar, arpacık soğan, yeşil biber, domates, tereyağlı pilav, patates tava ve lavaş ile..</small></p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 card-left">
                    <img src={menü3} class="img-fluid" alt="..."/>
                  </div>
                </div>
              </div>
            </a>           
          </div>

          <div className="col-4 mb-3 p-0 d-none d-lg-block orta anime-bottom">           
            <img className='img-fluid' src={anayemekbg} alt="" />          
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-right mb-3 ani1">
            <a href="" className=''>
              <div class="card mb-3 anime-right ani2" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü4} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">FAJİTA ET</h5>
                      <p class="card-text"><small class="">Fajita baharatlarıyla marine edilmiş ızgara bonfile dilimleri, jalapeno biber, kaşar peyniri, ekşi krema sos, salsa sos, sote soğan, biber ve sıcak lavaş ile..</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          
            <a href="">
              <div class="card mb-3 anime-right ani4" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü5} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">SATAY SOSLU PİLİÇ ŞİŞ</h5>
                      <p class="card-text"><small class="">Satay sos ile marine edilmiş piliç but şişleri, patates püresi, bahçe yeşillikleri ve sote sebze ile..</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </a> 

            <a href="">
              <div class="card mb-3 anime-right ani6" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü6} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">YOĞURTLU AKDENİZ KEBABI</h5>
                      <p class="card-text"><small class="">Izgara dana bonfile, köfte, tereyağlı bazlama, patlıcan beğendi, kibrit patates, yoğurt sos, ızgara domates, biber ve tereyağlı sos ile..</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anayemek;
