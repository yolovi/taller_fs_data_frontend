import { useState, useEffect } from "react";
import axios from "axios";
import ChartPaidMethod from "../Charts/ChartPaidMethod/ChartPaidMethod";

const Invoices = () => {
  const API_URL = "http://localhost:8080";

  // const initialState = {
  //   shoppingMalls: [],
  // };
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
    //console.log(res.data.uniqueNames);
    setNames(res.data.uniqueNames);
  };
  console.log(names)

  useEffect(() => {
    getShoppingMalls();
    getNameShoppingMalls();
  }, []);

  //console.log(data)

  return (
    <div className="chart">
      Estás en Chart
      <div>
        <ChartPaidMethod data={data} />
      </div>
    </div>
  );
};

export default Invoices;
