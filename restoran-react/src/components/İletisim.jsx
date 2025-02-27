
import React from 'react';

function İletisim() {
  return (
    <div className='container-fluid iletisim position-absolute top-0 p-0'>
      <div className="row top-0 m-0">
        <div className="col-12 pt-5 top d-flex align-items-center">
          <h1 className='text-white mx-auto'>İLETİŞİM</h1>
        </div>
      </div>

      <div className="row bottom text-center m-0">
        <div className="col-sm-12 col-md-3 pt-5">
          <div className="col-12 text-white">
            <h5>REZARVASYON</h5>
            <a href="#" className='text-decoration-none text-white'>yahya@hotmail.com</a>
          </div>

          <div className="col-12 pt-5">
            <h5 className='text-white'>SOSYAL MEDYA</h5>
            <div>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017
                1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048
                3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 pt-5">
          <h5 className='text-white text-center'>ADRESİMİZ</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6119.6485632273325!2d32.84602819525586!3d39.92294838609281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34effd6b9930b%3A0x6fa79cbeeeec0bac!2zS8SxesSiletisimF5LCAwNjQyMCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1str!2str!4v1707071136933!5m2!1str!2str" style={{width:"100%" , height:"1550", borderRadius:"5px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>           
        </div>

        <div className="col-sm-12 col-md-5 py-5">
          <form class="row g-3 col-12 col-md-10 mx-auto ">
            <div class="col-12">
              <input type="text" class="form-control" id="inputText4" placeholder='Ad Soyad*' />
            </div>
            <div class="col-12">
              <input type="email" class="form-control" id="inputEmail4" placeholder='E-Mail Adresiniz*' />
            </div>
            <div class="col-12">
              <input type="number" class="form-control" id="inputNumber4" placeholder='Telefon Numaranız*' />
            </div>
            <div class="col-12">
              <textarea class="form-control" placeholder="Mesaj Yazın*" id="floatingTextarea"></textarea>
            </div>
            <div class="form-check ms-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label text-white" for="flexCheckDefault">Onayla ve Devam Et.</label>
            </div>
            <button type="button" class="btn w-50 mx-auto">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default İletisim;
