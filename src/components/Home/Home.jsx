import { useEffect } from "react";

import ChartGender from "../Charts/ChartGender/ChartGender";
import { useDispatch } from "react-redux";
import { getShoppingMalls } from "../../features/chart/chartSlice";

const Home = () => {
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getShoppingMalls());
  }, []);


  return (
    <div className="home">
      <h1>Gráficas</h1>
        <ChartGender />
    </div>
  );
};

export default Home;
