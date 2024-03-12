import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import menü1 from '../img/menüler-img/içeçekler/classic-cooling-mojito.jpg';
import menü2 from '../img/menüler-img/içeçekler/crystal-glass-with-red-cocktail-garnished-with-orange-wheel.jpg';
import menü3 from '../img/menüler-img/içeçekler/fresh-milkshake-table.jpg';
import menü4 from '../img/menüler-img/içeçekler/glass-kiwifruit-orange-cocktail-garnished-with-orange-kiwifruit-slice.jpg';
import menü5 from '../img/menüler-img/içeçekler/front-view-cocktail-onn-open-book-with-slice-orange-form-decor.jpg';
import menü6 from '../img/menüler-img/içeçekler/glass-blue-drink-with-ice-garnished-with-lime-slice.jpg';
import icecekbg from '../img/menüler-img/içeçekler/icecek5.png';

const Içecek = () => {
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
              <Link className="ms-2 ms-sm-4 fst-italic linkk" id="circle2 ms-sm-4" to='/çorba'><h6>Çorba</h6></Link>
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
                      <h5 class="card-title">MIMOSA</h5>
                      <p class="card-text"><small class="">Prosecco, Orange Juice / Prosecco, Portakal Suyu.</small></p>
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
                      <h5 class="card-title">RASPBERRY FIZZY</h5>
                      <p class="card-text"><small class="">Prosecco, Limoncello, Raspberry Pure / Prosecco, Limoncello, Ahududu Pùre.</small></p>
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
                      <h5 class="card-title">GREEN PEACE</h5>
                      <p class="card-text"><small class="">Cardinal Melon, Fresh Cucumber,Lime / Kavun Likörü, Taze Salatalık,Lime.</small></p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 card-left">
                    <img src={menü3} class="img-fluid" alt="..."/>
                  </div>
                </div>
              </div>
            </a>            
          </div>

          <div className="col-4 mb-3 p-0 d-none d-lg-block orta  anime-bottom">
            <div className="d-flex justify-content-center içecek align-items-center">
                <img className='img-fluid' src={icecekbg} alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-right mb-3  ani1">
            <a href="" className=''>
              <div class="card mb-3 anime-right ani2" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü5} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">MOSCOW MULE</h5>
                      <p class="card-text"><small class="">Aperol, Prosecco, Mineral Water/ Aperol, Prosecco.</small></p>                     
                    </div>
                  </div>
                </div>
              </div>
            </a>
          
            <a href="">
              <div class="card mb-3 anime-right ani4" style={{maxwidth: "540px"}}>
                <div class="row align-items-center g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü4} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">APEROL SPRITZ</h5>   
                      <p class="card-text"><small class="">Ginger Mix, Ginger Ale, Lime / Zencefil Sosu, Zencefil Gazozu, Lime.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="">
              <div class="card mb-3 anime-right ani6" style={{maxwidth: "540px"}}>
                <div class="row g-0">
                  <div class="col-12 col-lg-3 card-right order-1">
                    <img src={menü6} class="img-fluid" alt="..."/>
                  </div>
                  <div class="col-12 col-lg-9 order-0 order-lg-1">
                    <div class="card-body">
                      <h5 class="card-title">BELLINI</h5>
                      <p class="card-text"><small class="">Prosecco, Archers, Peach / Prosecco, Archers, Şeftali.</small></p>
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

export default Içecek;
