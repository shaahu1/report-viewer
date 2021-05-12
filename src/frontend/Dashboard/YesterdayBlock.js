import React from 'react';
import './YesterdayBlock.css';

function YesterdayBlock(props)
{

    //var d = new Date().toISOString().slice(0, 10);
    var yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);

    return (
        <>
        <div className = 'YesterdayBlock_container' >
            <center> <span className = 'yesterday_text'> Yesterday </span> </center>
            <span className='date_value'> {yesterday} </span> <br/>

            <div className='yestdayData_container'>
                
                <span className='yesday_tital'> Gross Sale </span> <br/>
                <span className='yesday_data'> Rs. {props.grossSale} </span> <br/> <br/>
                <span className='yesday_tital'> Net Sale </span> <br/>
                <span className='yesday_data'> Rs. {props.netSale} </span> <br/>  <br/>
                <span className='yesday_tital'> No of Bill </span> <br/>
                <span className='yesday_data'> {props.noOfBill} </span> <br/>
            </div>
            
        </div>
        </>
    );
}

export default YesterdayBlock;