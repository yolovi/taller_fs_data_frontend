import { useState } from "react";

const Chart = () => {

  const API_URL = "http://localhost:8080/";

  const initialState = {
    data: [],
  };
  const [data, setData] = useState(initialState);
  console.log(data)

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