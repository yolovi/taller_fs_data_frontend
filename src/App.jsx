import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Invoices from "./components/Invoices/Invoices";
import ChartPaidMethod from "./components/Charts/ChartPaidMethod/ChartPaidMethod";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/ChartPaidMethod" element={<ChartPaidMethod />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
