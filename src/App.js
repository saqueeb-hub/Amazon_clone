import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Checkout from './Pages/Checkout';
import { useStateValue } from './Components/StateProvider';

function App() {
  // const [{ basket }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
