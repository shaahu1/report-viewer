import React from 'react';
import {  } from 'react-router-dom';
import './reportcard.css'

import b from '../../imgs/sales2.webp'

function ReportCard(props) {


    return(
        <>
        <a href={props.link}>
            <div className = 'reportCard_container' >

                <img src={b} height='200px' className='img' alt=''/>
                <br/>
                <br/>

                <center>
                    <span className='tital'>  {props.reportName}  </span>
                </center> 
                
                <br/>
            
            </div>
        </a>
        </>
    );
    
    
}

export default ReportCard;