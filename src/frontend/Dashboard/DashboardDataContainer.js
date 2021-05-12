import React, { useEffect, useState } from 'react';
import './dashboardDataContainer.css';
import DataBlock from './DataBlock';
import ReportCard from './ReportCard';
import WeekSalesChart from './WeekSalesChart';
import YesterdayBlock from './YesterdayBlock';

import {animated , useSpring} from 'react-spring'
import {useScroll} from 'react-use-gesture'


function DashboardDataContainer()
{
    var todayDate = new Date().toISOString().slice(0, 10);
    var yesterdayDate = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    var date3 = new Date(Date.now() - (864e5)*2).toISOString().slice(0, 10);
    var date4 = new Date(Date.now() - (864e5)*3).toISOString().slice(0, 10);
    var date5 = new Date(Date.now() - (864e5)*4).toISOString().slice(0, 10);
    var date6 = new Date(Date.now() - (864e5)*5).toISOString().slice(0, 10);
    var date7 = new Date(Date.now() - (864e5)*6).toISOString().slice(0, 10);

    const fs = require('browserify-fs');

    function currencyFormat(num) {
        let n = num || 0;
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const [data, setData] = useState('')
    const [today, setToday] = useState('')
    const [yesterday, setYesterday] = useState('')
    const [day3, setDay3] = useState('')
    const [day4, setDay4] = useState('')
    const [day5, setDay5] = useState('')
    const [day6, setDay6] = useState('')
    const [day7, setDay7] = useState('')

    

    let stop = 0;
    useEffect( () => {
        setTimeout( function()
        {
            fs.readFile('./todaySale.json', 'utf-8', (err, data) => {
                const dataa =  JSON.parse(data);
                if (dataa.state != 0 && stop == 0)
                {
                    setToday(dataa && dataa.recordsets[0][0] || '')
                    setYesterday(dataa && dataa.recordsets[1][0] || '')
                    setDay3(dataa && dataa.recordsets[2][0] || '')
                    setDay4(dataa && dataa.recordsets[3][0] || '')
                    setDay5(dataa && dataa.recordsets[4][0] || '')
                    setDay6(dataa && dataa.recordsets[5][0] || '')
                    setDay7(dataa && dataa.recordsets[6][0] || '')
                    console.log(dataa && dataa.recordsets[0],'t')
                    stop = 1;
                }
                else if (stop == 0)
                {
                  setData(dataa);
                  console.log('loop',err)
                }
                
            })
    
        },1000)
       
    },[data])
    
    const series = [{
        name: 'No of Bill',
        data: [ day7.NoOfBill || 0, 
                day6.NoOfBill || 0, 
                day5.NoOfBill || 0, 
                day4.NoOfBill || 0, 
                day3.NoOfBill || 0, 
                yesterday.NoOfBill || 0, 
                today.NoOfBill || 0 ]
      }, {
        name: 'Gross Sale',
        data: [ day7.GrossSale || 0, 
                day6.GrossSale || 0, 
                day5.GrossSale || 0, 
                day4.GrossSale || 0, 
                day3.GrossSale || 0, 
                yesterday.GrossSale || 0, 
                today.GrossSale || 0 ]
      },
      {
        name: 'Net Sale',
        data: [ day7.NetSale || 0, 
                day6.NetSale || 0, 
                day5.NetSale || 0, 
                day4.NetSale || 0, 
                day3.NetSale || 0, 
                yesterday.NetSale || 0, 
                today.NetSale || 0 ]
      }]

      const options = {
        chart: {
          height: 250,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
              '2021-02-11', 
              '2021-02-12', 
              '2021-02-13', 
              '2021-02-14', 
              '2021-02-15', 
              '2021-02-16', 
              '2021-02-17']
        },
        tooltip: {
          x: {
            format: 'yyyy-MM-dd'
          }
        }
      }

      const reports = [
        <ReportCard reportName ='Sales Report' link=''/>,
        <ReportCard reportName ='Sales Summary Report' link='/salesSummery'/>,
        <ReportCard reportName ='Purchase Report' link=''/>,
        <ReportCard reportName ='Purchase Summary Report' link=''/>,
        <ReportCard reportName ='Stock Balance Report' link='/stockBalance'/>,
        <ReportCard reportName ='Stock Balance Report' link=''/> ]

      const [styleScroll, setStyle] = useSpring(() =>({
        transform:" perspective(500px) rotatey(10deg)"
      }));

      const bind = useScroll(event => {
        setStyle({
          transform: `perspective(500px) rotatey(${
            event.scrolling ? event.delta[0] : 10
          }deg)`
        })
      })

    return (
        <>
        <div className = 'DashboardDataContainer' >

            <div className = 'leftside' >
                  <div className ='flex'>
                      <DataBlock tital = 'No of Bills' value = {today.NoOfBill || 0}/>
                      <DataBlock tital = 'Gross Sale (Rs.)' value = {currencyFormat(today.GrossSale || 0)}/>
                      <DataBlock tital = 'Net Sale (Rs.)' value = {currencyFormat(today.NetSale || 0)} />
                      <DataBlock tital = 'Net Sale (Rs.)' value = '112,026.50'/>
                  </div>
                  <br/><br/>
                  <WeekSalesChart series = {series} options = {options} />
            </div>
            
            <div className = 'flex rightside'>
                  <YesterdayBlock grossSale = {currencyFormat(yesterday.GrossSale || 0)} netSale = {currencyFormat(yesterday.NetSale || 0)} noOfBill ={yesterday.NoOfBill ?? 0} />
                  
            </div>
        
            <div className='reportContainer' {...bind()}>
              {reports.map((card,i) => {
                return <animated.div key={i} style={{...styleScroll}}> {card} </animated.div>
              })}
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
        </div>
        </>
    );
}

export default DashboardDataContainer;