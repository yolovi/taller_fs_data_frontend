import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { useSelector } from "react-redux";
// import { Spin } from "antd";


const ChartGender = () => {
  const [genderData, setGenderData] = useState([]);

  const { invoices, isLoading } = useSelector((state) => state.invoices);
  const {invoices: _invoices} = invoices
  
  
  useEffect(() => {
    
    const genders = _invoices?.map((item) => item?.gender);
    
    //const genders = _invoices?.map((item) => console.log(item));
    const maleCount = genders?.filter((gender) => gender === "Male").length;
    const femaleCount = genders?.filter((gender) => gender === "Female").length;
    const total = maleCount + femaleCount;


    const dataReady = [
      {
        name: "Male",
        value: maleCount,
        percentage: ((maleCount / total) * 100).toFixed(1),
      },
      {
        name: "Female",
        value: femaleCount,
        percentage: ((femaleCount / total) * 100).toFixed(1),
      },
    ];

    setGenderData(dataReady);
  }, []);

  
  const svgRef = useRef();
  
  useEffect(() => {
    
    if(genderData.length > 0) {
      
      const width = 500;
      const height = 500;
      const margin = 50;
  
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
  
      const color = d3.scaleOrdinal(["#20EFA8", "#9D82D6"]);
  
      const pie = d3.pie().value((d) => d.value);
  
      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - margin);
  
      svg
        .selectAll("path")
        .data(pie(genderData))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => color(d.data.name))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);
  
      svg
        .selectAll("text")
        .data(pie(genderData))
        .enter()
        .append("text")
        .text((d) => `${d.data.name}: ${d.data.percentage}%`)
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .style("text-anchor", "middle")
        .style("font-size", 15);

    }
  }, [genderData]);

 
  // if (isLoading) {
  //   return <Spin />;
  // }
  return <svg ref={svgRef}></svg>;
};

export default ChartGender;
