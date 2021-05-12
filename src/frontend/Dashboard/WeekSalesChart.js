import React from 'react';
import ReactApexChart from 'react-apexcharts';


function WeekSalesChart(props)
{
      

    return (
        <>
        <span style={{fontWeight: "750", fontSize: '18px'}} > Last 7 Days Summery </span>
        <ReactApexChart options={props.options} series={props.series} type="area" height={200}  />
        </>
    );
}

export default WeekSalesChart;