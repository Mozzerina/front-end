import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import Featured from './pages/Featured';
import Register from './pages/Register';
import Product from './components/Product/Product';
import Login from './pages/Login';

function App() {
  const [location, setLocation] = useState('');
  const [urlText, setUrlText] = useState('');
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('');

  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/menu" element={<Menu loading={loading} setLoading={setLoading} />} />
        <Route path="/menu/featured/" element={<Featured loading={loading} setLoading={setLoading} />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/menu/:id/:name" element={<Menu setUrl={setUrl} setUrlText={setUrlText} setLocation={setLocation} loading={loading} setLoading={setLoading} />} />
        <Route path="/menu/product/:id" element={<Product url={url} urlText={urlText} location={location} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
