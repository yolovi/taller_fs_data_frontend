import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ChartGender from "./components/Charts/ChartGender/ChartGender";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChartGender" element={<ChartGender/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
