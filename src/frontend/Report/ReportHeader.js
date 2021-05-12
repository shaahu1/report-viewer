import React,{ useState } from 'react';

import './reportHeader.css';
const fs = require('browserify-fs')

function ReportHeader(props) {

    const [shopName, setShopName] = useState()
    const [shopAddress, setShopAddress] = useState()

    fs.readFile('/shopDetails.json', 'utf-8', (err, data) =>
    {
        if(data)
        {
            const dataa = JSON.parse(data);
            setShopName(dataa && dataa.recordsets && dataa.recordsets[3][0].CompanyName || '')
            setShopAddress(dataa && dataa.recordsets && (dataa.recordsets[3][0].Address1+', '+ dataa.recordsets[3][0].Address2+', '+ dataa.recordsets[3][0].Address3))
        
        }
    })
    
    return(
        <>
            <div className="header_container">
                    <span className="header_shopName"> {shopName} </span> <br/>
                    <span className="header_shopAddress"> {shopAddress} </span> <br/>
                    <span className="header_email"> info@maxsoft.lk </span> <br/>
                    <span className="header_title"> {props.tital} </span> <br/>
            </div>

        </>
    );
}

export default ReportHeader;