// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Anasayfa from './components/Anasayfa';
import Hakkimizda from './components/Hakkimizda';
import Rezervasyon from './components/Rezervasyon';
import İletisim from './components/İletisim';
import AnaYemek from './components/AnaYemek'
import Burger from './components/Burger'
import Çorba from './components/Çorba'
import Salata from './components/Salata'
import Içecek from './components/Içecek'
import Tatli from './components/Tatli'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/rezervasyon" element={<Rezervasyon />} />
          <Route path="/iletisim" element={<İletisim />} />          
          <Route path="/AnaYemek" element={<AnaYemek />} />
          <Route path="/Burger" element={<Burger />} />
          <Route path="/Çorba" element={<Çorba />} />
          <Route path="/Salata" element={<Salata />} />
          <Route path="/Içecek" element={<Içecek />} />
          <Route path="/Tatli" element={<Tatli />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

