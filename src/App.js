import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MapView from './components/MapView';
import ListView from './components/ListView';
import './App.css';
 
function App(){
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <h1>TUT 自販機情報ポータル</h1>
          <Link to="/">マップ表示</Link>
          <Link to="/list">一覧表示</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MapView />} />
            <Route path="/list" element={<ListView />} />
          </Routes>
        </main>
        <footer>
          <p>Safari未対応です…</p>
          <p><a href="https://github.com/getpa/tut-vending-machine-portal">getpa/tut-vending-machine-portal</a></p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
 
export default App;