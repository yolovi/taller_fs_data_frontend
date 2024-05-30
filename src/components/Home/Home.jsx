import { useState, useEffect } from "react";
import axios from "axios";
import ChartDate from "../Charts/ChartDate/ChartDate";
import ChartGender from "../Charts/ChartGender/ChartGender";
import ChartPaidMethod from "../Charts/ChartPaidMethod/ChartPaidMethod";
import ChartProductCategory from "../Charts/ChartProductCategory/ChartProductCategory";


const Home = () => {
  const API_URL = "http://localhost:8080";


  const [data, setData] = useState([]);
  const [names, setNames] = useState([]);

  const getShoppingMalls = async () => {
    const res = await axios.get(API_URL + "/shoppingmalls/invoices");
    if (!res.data.ok) {
      return;
    }
    setData(res.data.invoices);
  };

  const getNameShoppingMalls = async () => {
    const res = await axios.get(API_URL + "/shoppingmalls/shoppingMallsNames");
    if (!res.data.ok) {
      return;
    }
    setNames(res.data.uniqueNames);
  };
  //console.log(names)



  useEffect(() => {
    getShoppingMalls();
    getNameShoppingMalls();
  }, []);


  return (
    <div className="chart">
      Estás en Chart
      <div>
        <ChartDate data={data} />
        <ChartGender data={data} />
        <ChartPaidMethod data={data} />
        <ChartProductCategory data={data} />
      </div>
    </div>
  );
};

export default Home;
