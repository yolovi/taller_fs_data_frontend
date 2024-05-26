import { useState } from "react";

const ChartDetail = () => {


  const API_URL = "http://localhost:8080/id/";

  const initialState = {
    data: [],
  };
  const [data, setData] = useState(initialState);
  console.log(data)

  return (
    <div className="chart-detail">
      Estás en Chart Detail by Id
      <div>

      </div>
    </div>
  );
};

export default ChartDetail;


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