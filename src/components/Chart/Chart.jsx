import { useState } from "react";
import axios from "axios";

const Chart = () => {

  const API_URL = "http://localhost:8080";

  const initialState = {
    data: [],
  };
  const [data, setData] = useState(initialState);
  console.log(data)

  const getShoppingMalls = async () => {
    const res = await axios.get(API_URL + "/shoppingmalls");
    console.log(res)
    //return res;
  };
  
  getShoppingMalls()

  return (
    <div className="chart">
      Estás en Chart
      <div>

      </div>
    </div>
  );
};

export default Chart;


// data: [
//   {
//     _id: {
//       $oid: "ID",
//     },
//     shopping_mall: "Centro Comercial",
//     quantity: 1,
//   },
// ],
// };