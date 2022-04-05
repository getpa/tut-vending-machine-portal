import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MapView from './components/MapView';
import ListView from './components/ListView';
import VmList from './data/vmlist.json';
import PayName from './data/payname.json';
import './App.css';
 
function App() {
  const [vms, setVms] = useState(VmList);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <h1>TUT 自販機情報ポータル</h1>
          <Link to="/">マップ表示</Link>
          <Link to="/list">一覧表示</Link>
          <select onChange={e => {
            if (e.currentTarget.value === "all") {
              setVms(VmList);
            } else {
              setVms(VmList.filter(item => item.accepts.includes(e.currentTarget.value)));
            }
          }}>
            <option value="all">すべて表示</option>
            {
              Object.entries(PayName).map(kv => <option value={kv[0]}>{kv[1]}</option>)
            }
          </select>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MapView vms={ vms }/>} />
            <Route path="/list" element={<ListView vms={ vms }/>} />
          </Routes>
        </main>
        <footer>
          <p>Why don't you join the development?! (<a href="https://github.com/getpa/tut-vending-machine-portal">getpa/tut-vending-machine-portal</a>)</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
 
export default App;