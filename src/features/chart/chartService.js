import axios from "axios";

const API_URL = "http://localhost:8080";

const getShoppingMalls = async () => {
  const res = await axios.get(API_URL + "/shoppingmalls/invoices");
  if (!res.data.ok) {
    return;
  }
  console.log(res.data)
  return res.data
};

const chartService = {
  getShoppingMalls,
};

export default chartService;
