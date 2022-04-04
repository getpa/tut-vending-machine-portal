import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Map from './Map';
import ListView from './ListView';
import './App.css';
 
function App(){
  return (
    <div className="App">
      <header>
        <h1>TUT 自販機情報ポータル</h1>
        <a href="/tut-vending-machine-portal">マップ表示</a>
        <a href="/tut-vending-machine-portal/list">一覧表示</a>
        <p>Safari未対応です…</p>
        <p><a href="https://github.com/getpa/tut-vending-machine-portal">getpa/tut-vending-machine-portal</a></p>
      </header>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<ListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;