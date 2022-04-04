import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Map from './Map';
import ListView from './ListView';
import './App.css';
 
function App(){
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header>
        <h1>TUT 自販機情報ポータル</h1>
        <Link to="/">マップ表示</Link>
        <Link to="/list">一覧表示</Link>
        <p>Safari未対応です…</p>
        <p><a href="https://github.com/getpa/tut-vending-machine-portal">getpa/tut-vending-machine-portal</a></p>
      </header>

        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<ListView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;