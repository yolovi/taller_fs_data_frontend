import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
