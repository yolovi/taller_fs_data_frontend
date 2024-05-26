import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Chart from "./components/Chart/Chart";
import ChartDetail from "./components/ChartDetail/ChartDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chartdetail" element={<ChartDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
