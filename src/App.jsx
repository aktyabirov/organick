import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/Home/Home';
import About from './pages/About/About'
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail'
import NotFoundPage from './components/NotFound';
import Cart from './pages/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
