
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RezervasyonFormu = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formun gönderimine ilişkin işlemleri burada gerçekleştirin
    console.log('Form Gönderildi:', {
      isim: e.target.elements.isim.value,
      soyisim: e.target.elements.soyisim.value,
      email: e.target.elements.email.value,
      telefon: e.target.elements.telefon.value,
      masa: e.target.elements.masa.value,
      tarih: selectedDate,
    });
  };

  return (
    <div className='rezervasyon top-0 pt-5'>
      <div className="container mt-5 pt-5">
        <form className="row g-3 mt-5 pt-5 d-flex align-items-center" onSubmit={handleSubmit}>
          <div className="col-12 col-md-6">
            <input type="text" className="form-control" placeholder="İsim*" name="isim" required />
          </div>
          <div className="col-12 col-md-6">
            <input type="text" className="form-control" placeholder="Soyisim*" name="soyisim" required />
          </div>
          <div className="col-12 col-md-6">
            <input type="email" className="form-control" placeholder="E-Mail Adresiniz*" name="email" required />
          </div>
          <div className="col-12 col-md-6">
            <input type="number" className="form-control" placeholder="Telefon Numaranız*" name="telefon" required />
          </div>
          
          <div className="col-6 col-sm-3">
            <DatePicker 
            className="form-control"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Tarih Seçin"
            />
          </div>
          <div className="col-6 col-sm-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" required />
              <label className="form-check-label text-white" htmlFor="gridCheck">
                Onaylıyorum.
              </label>
            </div>
          </div>
          <div className="col-12 col-sm-5 pt-2 text-center p-3 p-sm-0">
            <button type="submit" className="btn w-100 px-5">Rezervasyon Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RezervasyonFormu;
