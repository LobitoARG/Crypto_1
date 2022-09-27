// Import Components
import Home from "./components/Home";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";

// Import Libraries
import { Routes, Route } from 'react-router-dom';
import './css/index.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/list" element={<CryptoList/>} />
      </Routes>
    </div>
  );
}

export default App;
