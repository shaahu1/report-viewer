import React, { useEffect, useState } from 'react';

import './dashboardBlock.css';
import DashboardDataContainer from './DashboardDataContainer';

function DashboardBlock()
{
    const fs = require('browserify-fs');

    
    const [data, setData] = useState('')
    const [shopName, setShopName] = useState('Loding ...')
    const [shopAddress, setShopAddress] = useState('Loding ...')

    let stop = 0;
    useEffect( () => {
        setTimeout( function()
        {
            fs.readFile('./shopDetails.json', 'utf-8', (err, data) =>
            {
                const dataa = JSON.parse(data || '');
                if (dataa.state != 0 && stop == 0)
                {
                    setShopName(dataa && dataa.recordsets && dataa.recordsets[3][0].CompanyName )
                    setShopAddress(dataa && dataa.recordsets && (dataa.recordsets[3][0].Address1+', '+ dataa.recordsets[3][0].Address2+', '+ dataa.recordsets[3][0].Address3))
                    console.log('name', shopName)
                    stop = 1;
                }
                else if (stop == 0)
                {
                  setData(dataa);
                  console.log('loop')
                }
            },1000)
        })
    },[data])

   
  

    return(
        <>
        <div className='dashboard_container'>
            <div className='headerBar' >
                <span className='titalDashboard'> DASHBOARD </span>
                <span className='shopName'> {shopName} </span> <br/>
                <span className='shopAddress'> {shopAddress} </span>
            </div>
            
            <div>
            <DashboardDataContainer />
            </div>
            
        </div>
        <br/>
        <br/>
        </>
    );
}

export default DashboardBlock;